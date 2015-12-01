'use strict';


var debug = require('debug')('isaac-wrapper:err');

var suscriptions = {
    'status' : require('./status'),
    'devicestatus': require('./devicestatus')
};

function Suscribe() {

    var suscription = [].shift.apply(arguments);

    if ( !(suscription in suscriptions) ) {
        debug('[id:"%s" message:"%s" at:"%s"]', this.id, 'Method' + suscription + 'not found', 'Suscribe');
        return;
    }

    return suscriptions[suscription].apply(this, arguments);
}

module.exports = Suscribe;
