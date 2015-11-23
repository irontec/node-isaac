'use strict';

function Pause() {

    var message;

    message = ['ACDPAUSE'].join(' ');

    this.write(message);
}

module.exports = Pause;
