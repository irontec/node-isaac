'use strict';

var expect = require('chai').expect;

var Agent = require('../agent');

module.exports = setTests;

function setTests(connector, config, helpers) {
    var agent = Agent(connector);

    describe('Agent: Valid credentials in login', validLogin);
    describe('Agent: logout', logout);
    describe('Agent: invalid credentials in login', invalidLogin);

    function validLogin() {
        var result;

        before(function(done){
            helpers.connect(function() {
                helpers.login(function(data) {
                    result = data;
                    done();
                });

            });
        });

        it('should return a success status', function(){
            expect(result.status).equals('success');
        });
    }

    function logout() {
        var result;

        before(function(done){
            helpers.logout(function() {
                result = true;
                done();
            });
        });

        it('should send an agent.logout event', function(){
            expect(result).equals(true);
        });

        it('should shutdown the connection', function() {
            expect(connector.connected).equals(false);
        });
    }

    function invalidLogin() {
        var result;

        var ext, pass;

        ext = config.agent.invalid.extension;
        pass = config.agent.invalid.password;

        before(function(done){
            helpers.connect(function() {

                agent.login(ext, pass, function(data) {
                    result = data;
                    connector.on('isaac.disconnect', function() {
                        connector.removeAllListeners('isaac.disconnect');
                        done();
                    });
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
