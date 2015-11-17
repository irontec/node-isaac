'use strict';

var expect = require('chai').expect;

var Call = require('../call');

var call;

module.exports = setTests;

function setTests(connector, config, helpers) {
    call = Call(connector);

    describe('Call: Make call', makeCall);
    describe('Call: Answer queue call', answerCall);
    //describe('Agent: logout', logout);
    //describe('Agent: invalid credentials in login', invalidLogin);

    function makeCall() {
        var result;

        before(function(done){
            helpers.connect(function() {
                helpers.login(function() {
                    call.makeCall(config.call.callNumber, function(data) {
                        result = data;
                        helpers.logout(done);
                    });
                });
            });
        });

        it('should print call info', function(){
            expect(result).to.be.an('object');
        });

        it('should be not from queue', function(){
            expect(result.fromQueue).equals(false);
        });

        it('should be agent starting', function(){
            expect(result.source).equals('AGENT');
            expect(result.status).equals('STARTING');
        });
    }

    function answerCall() {
        var result;

        this.timeout(5000);

        before(function(done){
            helpers.connect(function() {
                helpers.login(function() {
                    call.answer(function(data) {
                        result = data;
                        helpers.logout(done);
                    });
                });
            });
        });

        it('should print call info', function(){
            expect(result).to.be.an('object');
        });

        it('should be from queue', function(){
            expect(result.fromQueue).equals(true);
        });
    }
}
