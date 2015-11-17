'use strict';

function Queue(isaacConnector) {
    return {
        'queueinfo': require('./queueinfo').bind(isaacConnector),
        'queuejoin': require('./queuejoin').bind(isaacConnector),
        'queueleave': require('./queueleave').bind(isaacConnector)
    };
}

module.exports = Queue;
