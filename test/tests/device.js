'use strict';

var expect = require('chai').expect;

var Device = require('../device');

var device;

module.exports = setTests;

function setTests(connector, config, helpers) {
    device = Device(connector);

    describe('Device: Print device status', deviceStatus);
    describe('Device: Pause device', pauseDevice);
    describe('Device: Unpause device', unpauseDevice);

    function deviceStatus() {
        var result;

        before(function(done){
            helpers.connect(function() {
                helpers.login(function() {
                    device.status(function(data) {
                        result = data;
                        helpers.logout(done);
                    });
                });
            });
        });

        it('should print device status', function(){
            expect(result.status).to.be.an('string');
        });
    }

    function pauseDevice() {
        var result;

        before(function(done){
            helpers.connect(function() {
                helpers.login(function() {
                    device.pause(function(data) {
                        result = data;
                        helpers.logout(done);
                    });
                });
            });
        });

        it('should print paused device status', function(){
            expect(result.status).equals('PAUSED');
        });
    }

    function unpauseDevice() {
        var result;

        before(function(done){
            helpers.connect(function() {
                helpers.login(function() {
                    device.unpause(function(data) {
                        result = data;
                        helpers.logout(done);
                    });
                });
            });
        });

        it('should print unpaused device status', function(){
            expect(result.status).equals('UNPAUSED');
        });
    }
}
