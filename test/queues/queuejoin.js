'use strict';

function QueueJoin(queueName, cb) {

    var connector = this;

    connector.on('queues.join', function(data) {
        connector.removeAllListeners('queues.join');
        cb(data);
    });

    connector.joinQueue(queueName, 1);

}

module.exports = QueueJoin;
