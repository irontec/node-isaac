'use strict';

function getStatusMessage(withUID, withQueue) {

    var options = ['STATUS'];

    if (withUID) {
        options.push('WUID');
    }

    if (withQueue) {
        options.push('WQUEUE');
    }

    return options.join(' ');
}

module.exports = getStatusMessage;
