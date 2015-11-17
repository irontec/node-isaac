'use strict';

function Suscribe(logProvider) {

    var log = logProvider;

    if ( typeof log === 'object' && !('info' in log) ) {
        throw new Error('logProvider must implement an info method');
    }

    var suscriptions = {
        'status' : require('./status')(log),
        'devicestatus': require('./devicestatus')(log)
    }

    return suscribe;

    function suscribe() {
        var suscription = arguments[0];

        if ( !(suscription in suscriptions) ) {
            log.warn('IsaacConnector.warn', 'Suscribe method for ' + suscription + 'not found.');
            return;
        }

        suscriptions[suscription].apply(this, arguments);
    }
}

module.exports = Suscribe;
