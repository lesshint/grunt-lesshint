'use strict';

var assert = require( 'assert' );

describe( 'grunt-lesshint', function(){
    var spawnSync = require( 'spawn-sync' );

    describe( 'defaultOptions', function(){
        var response = spawnSync( 'grunt', [ 'lesshint' ], {
            encoding: 'utf8'
        });

        it( 'This assertion should exit with status code 3 (Task error)', function(){
            assert.equal( 3, response.status );
        } );
    });

    describe( 'defaultOptionsNoErrors', function(){
        var response = spawnSync( 'grunt', [ 'lesshint:noErrors' ], {
            encoding: 'utf8'
        });

        it( 'This assertion should succeed and exit with status code 0 (No errors!)', function(){
            assert.equal( response.status, 0 );
        });
    });

    describe( 'customOptionsNoErrors', function(){
        var response = spawnSync( 'grunt', [ 'lesshint:customOptions' ], {
            encoding: 'utf8'
        });

        it( 'This assertion should succeed and exit with status code 0 (No errors!)', function(){
            assert.equal( response.status, 0 );
        });
    });

    describe( 'lesshintRcNoErrors', function(){
        var response = spawnSync( 'grunt', [ 'lesshint:useLesshintRc' ], {
            encoding: 'utf8'
        });

        it( 'This assertion should succeed and exit with status code 0 (No errors!)', function(){
            assert.equal( response.status, 0 );
        });
    });

    describe( 'withForce', function(){
        var response = spawnSync( 'grunt', [ 'lesshint:useForce' ], {
            encoding: 'utf8'
        });

        it( 'This assertion should succeed and exit with status code 0 (No errors!)', function(){
            assert.equal( response.status, 0 );
        });
    });
});
