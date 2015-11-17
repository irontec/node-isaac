'use strict';

var expect = require('chai').expect;

var Queues = require('../queues');

var queues;

module.exports = setTests;

function setTests(connector, config, helpers) {
    queues = Queues(connector);

    describe('Queues: Print queues list with queueInfo', queueInfo);
    describe('Queues: Join valid queue', queueJoin);
    describe('Queues: Leave valid queue', queueLeave);
    describe('Queues: Join invalid queue', queueInvalidJoin);
    describe('Queues: Leave invalid queue', queueInvalidLeave);
    //describe('Agent: logout', logout);
    //describe('Agent: invalid credentials in login', invalidLogin);

    function queueInfo() {
        var result;

        before(function(done){
            helpers.connect(function() {
                helpers.login(function() {
                    queues.queueinfo(function(data) {
                        result = data;
                        helpers.logout(done);
                    });
                });
            });
        });

        it('should return an array of queues', function(){
            expect(result.queues).to.be.an('array');
        });
    }

    function queueJoin() {
        var result;

        before(function(done){
            helpers.connect(function() {
                helpers.login(function() {
                    queues.queuejoin(config.queues.validQueue, function(data) {
                        result = data;
                        helpers.logout(done);
                    });
                });
            });
        });

        it('should return a success status', function(){
            expect(result.status).equals('success');
        });

        it('should contain a queue field with the queue Name', function() {
            expect(result.queue).equals(config.queues.validQueue);
        });
    }

    function queueLeave() {
        var result;

        before(function(done){
            helpers.connect(function() {
                helpers.login(function() {
                    queues.queueleave(config.queues.validQueue, function(data) {
                        result = data;
                        helpers.logout(done);
                    });
                });
            });
        });

        it('should return a success status', function(){
            expect(result.status).equals('success');
        });

        it('should contain a queue field with the queue Name', function() {
            expect(result.queue).equals(config.queues.validQueue);
        });
    }

    function queueInvalidJoin() {
        var result;

        before(function(done){
            helpers.connect(function() {
                helpers.login(function() {
                    queues.queuejoin(config.queues.invalidQueue, function(data) {
                        result = data;
                        helpers.logout(done);
                    });
                });
            });
        });

        it('should return an error status', function(){
            expect(result.status).equals('error');
        });


        it('should contain a queue field with the queue Name', function() {
            expect(result.queue).equals(config.queues.invalidQueue);
        });
    }

    function queueInvalidLeave() {
        var result;

        before(function(done){
            helpers.connect(function() {
                helpers.login(function() {
                    queues.queueleave(config.queues.invalidQueue, function(data) {
                        result = data;
                        helpers.logout(done);
                    });
                });
            });
        });

        it('should return an error status', function(){
            expect(result.status).equals('error');
        });


        it('should contain a queue field with the queue Name', function() {
            expect(result.queue).equals(config.queues.invalidQueue);
        });
    }
}
