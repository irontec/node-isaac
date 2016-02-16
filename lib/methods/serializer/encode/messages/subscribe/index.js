'use strict';

var debug = require('debug')('isaac-wrapper:err');

var subscriptions = {
    status: require('./status'),
    devicestatus: require('./devicestatus')
};

function Subscribe() {

    var suscription = [].shift.apply(arguments);

    if (!(suscription in subscriptions)) {
        debug('[id:"%s" message:"%s" at:"%s"]', this.id, 'Method' + suscription + 'not found', 'Suscribe');
        return;
    }

    return subscriptions[suscription].apply(this, arguments);
}

module.exports = Subscribe;
