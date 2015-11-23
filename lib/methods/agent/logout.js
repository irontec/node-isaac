
'use strict';

function Logout() {
    var message;

    message = ['LOGOUT'].join(' ');

    this.write(message);
}

module.exports = Logout;
