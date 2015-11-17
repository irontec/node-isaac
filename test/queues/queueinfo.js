'use strict';

function QueueInfo(cb) {

    var connector = this;

    connector.on('queues.list', function(data) {
        connector.removeAllListeners('queues.list');
        cb(data);
    });

    connector.getQueues();

}

module.exports = QueueInfo;
