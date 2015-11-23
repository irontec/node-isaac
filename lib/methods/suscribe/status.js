'use strict';

function Listen(withUID, withQueue) {

    var message, options;

    options = ['STATUS'];

    if (withUID) {
        options.push('WUID');
    }

    if (withQueue) {
        options.push('WQUEUE');
    }

    message = options.join(' ');

    this.write(message);
}

module.exports = Listen;
