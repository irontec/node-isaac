'use strict';

function Call(number, cb) {

    var connector = this;
    var result;
    connector.on('call.status', function(data) {
        if (data.status === 'STARTING' && data.source === 'AGENT') {
            result = data;
            setTimeout(function() {
                connector.hangupCall(data.isaacId, false);
            }, 1000);
        }
        if (data.status === 'UNKNOWNHANGUP' || data.status === 'HANGUP') {
            connector.removeAllListeners('call.status');
            cb(result);
        }

    });
    connector.suscribe('status', true, true);
    connector.createCall(number);

}

module.exports = Call;
