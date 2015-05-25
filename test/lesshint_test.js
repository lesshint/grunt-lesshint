'use strict';

var childProcess = require( 'child_process' );

exports.lesshint = {
    setUp: function( done ){
        done();
    },
    defaultOptions: function( test ){
        test.expect( 1 );

        // task: lesshint
        // should fail

        var response = childProcess.spawnSync( 'grunt', [ 'lesshint' ], {
            encoding: 'utf8'
        });

        test.equal( response.status, 3, 'This assertion should exit with status code 3 (Task error)' );

        test.done();
    },
    defaultOptionsNoErrors: function( test ){
        test.expect( 1 );

        // task: lesshint:noErrors
        // should succeed without warnings

        var response = childProcess.spawnSync( 'grunt', [ 'lesshint:noErrors' ], {
            encoding: 'utf8'
        });

        test.equal( response.status, 0, 'This assertion should succeed and exit with status code 0 (No errors!)' );

        test.done();
    },
    customOptionsNoErrors: function( test ){
        test.expect( 1 );

        // task: lesshint:customOptions
        // should succeed without warnings

        var response = childProcess.spawnSync( 'grunt', [ 'lesshint:customOptions' ], {
            encoding: 'utf8'
        });

        test.equal( response.status, 0, 'This assertion should succeed and exit with status code 0 (No errors!)' );

        test.done();
    },
    withForce: function( test ){
        test.expect( 1 );

        // task: lesshint:useForce
        // should succeed with warnings

        var response = childProcess.spawnSync( 'grunt', [ 'lesshint:useForce' ], {
            encoding: 'utf8'
        });

        test.equal( response.status, 0, 'This assertion should succeed and exit with status code 0 (No errors!)' );

        test.done();
    }
};
