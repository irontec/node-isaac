'use strict';

var expect = require('chai').expect;

var Connection = require('../connection');

module.exports = setTests;

function setTests(connector, config, helpers) {

    var connection = Connection(connector);

    describe('Connection: Valid connection', validConnection);
    describe('Connection: Valid disconnection', validDisconnection);
    describe('Connection: Invalid connection', invalidConnection);

    function validConnection() {
        var result;

        before(function(done){

            helpers.connect(function(data) {
                result = data;
                done();
            });

        });

        it('should return a success status', function(){
            expect(result.status).equals('success');
        });

        it('should set connected value to true', function() {
            expect(connector.connected).equals(true);
        });
    }

    function validDisconnection() {
        var result;

        before(function(done){

            connection.disconnect(function() {
                result = true;
                done();
            });

        });

        it('should send a disconnect event', function(){
            expect(result).equals(true);
        });

        it('should set connected value to false', function() {
            expect(connector.connected).equals(false);
        });
    }

    function invalidConnection() {
        var result;

        var port, host;

        port = config.connection.invalid.port;
        host = config.connection.invalid.host;

        before(function(done){

            connection.connect(port, host, function(data) {

                result = data;

                if (!connector.connected) {
                    done();
                    return;
                }

                connector.on('isaac.disconnect', function() {
                    done();
                });

            });

        });

        it('should return an error status', function(){
            expect(result.status).equals('error');
        });

        it('should shutdown the connection', function() {
            expect(connector.connected).equals(false);
        });
    }
}
