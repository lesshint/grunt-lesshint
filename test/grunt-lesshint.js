'use strict';

var path = require( 'path' );

var assert = require( 'assert' );

describe( 'grunt-lesshint', function(){
    var spawnSync = require( 'spawn-sync' );
    var gruntPath = path.join( __dirname + '/../node_modules/grunt/bin/grunt' );

    describe( 'defaultOptions', function(){
        var response = spawnSync( 'node', [ gruntPath, 'lesshint' ], {
            encoding: 'utf8'
        });

        it( 'This assertion should exit with status code 3 (Task error)', function(){
            assert.equal( 3, response.status );
        } );
    });

    describe( 'defaultOptionsNoErrors', function(){
        var response = spawnSync( 'node', [ gruntPath, 'lesshint:noErrors' ], {
            encoding: 'utf8'
        });

        it( 'This assertion should succeed and exit with status code 0 (No errors!)', function(){
            assert.equal( response.status, 0 );
        });
    });

    describe( 'customOptionsNoErrors', function(){
        var response = spawnSync( 'node', [ gruntPath, 'lesshint:customOptions' ], {
            encoding: 'utf8'
        });

        it( 'This assertion should succeed and exit with status code 0 (No errors!)', function(){
            assert.equal( response.status, 0 );
        });
    });

    describe( 'lesshintRcNoErrors', function(){
        var response = spawnSync( 'node', [ gruntPath, 'lesshint:useLesshintRc' ], {
            encoding: 'utf8'
        });

        it( 'This assertion should succeed and exit with status code 0 (No errors!)', function(){
            assert.equal( response.status, 0 );
        });
    });

    describe( 'withForce', function(){
        var response = spawnSync( 'node', [ gruntPath, 'lesshint:useForce' ], {
            encoding: 'utf8'
        });

        it( 'This assertion should succeed and exit with status code 0 (No errors!)', function(){
            assert.equal( response.status, 0 );
        });
    });

    describe( 'customReporter', function(){
        var response = spawnSync( 'node', [ gruntPath, 'lesshint:customReporter' ], {
            encoding: 'utf8'
        });

        it( 'This assertion should use custom reporter to log error', function() {
            assert(response.stdout.indexOf("custom spaceBeforeBrace") >= 0);
            assert(response.stdout.indexOf("custom spaceAfterPropertyColon") >= 0);
        });
    });
});
