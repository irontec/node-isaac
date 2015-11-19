
'use strict';

function Answer(logProvider) {

    var log = logProvider;

    if ( typeof log === 'object' && !('info' in log) ) {
        throw new Error('logProvider must implement an info method');
    }

    return answer;

    function getCommand(isExternal) {
        if (isExternal) {
            return 'ANSWERUID';
        }
        return 'ANSWER';
    }

    function answer(refId, isExternal) {
        var isaacConnector = this;
        var message;
        if (typeof isExternal === 'undefined') {
            isExternal = true;
        }

        if (!refId) {
            throw new Error('Missing parameters');
        }

        message = [getCommand(isExternal), refId].join(' ');

        if (log) {
            log.info('IsaacConnector.write: %s', message);
        }

        isaacConnector.socket.write(message + '\n');
    }
}

module.exports = Answer;
