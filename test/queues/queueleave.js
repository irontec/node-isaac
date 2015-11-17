'use strict';

function QueueLeave(queueName, cb) {

    var connector = this;

    connector.on('queues.leave', function(data) {
        connector.removeAllListeners('queues.leave');
        cb(data);
    });

    connector.leaveQueue(queueName);

}

module.exports = QueueLeave;
