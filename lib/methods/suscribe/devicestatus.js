'use strict';

function Listen() {

    var message;

    message = ['DEVICESTATUS'].join(' ');

    this.write(message);
}

module.exports = Listen;
