/*
* grunt-lesshint
* https://github.com/kokarn/grunt-lesshint
*
* Copyright (c) 2015 Oskar Risberg
* Licensed under the MIT license.
*/

'use strict';

var lesshint = require( 'LessHint' ),
    chalk = require( 'chalk' );

module.exports = function( grunt ){
    grunt.registerMultiTask( 'lesshint', 'Lint lesscss files', function(){
        var options = this.options(),
            linter = new lesshint(),
            failOnError = true;

        linter.configure( {
            "spaceAfterPropertyColon": {
                "enabled": true,
                "style": "one_space"
            },

            "spaceBeforeBrace": {
                "enabled": true,
                "style": "one_space"
            }
        } );

        this.files.forEach( function( files ){
            if( !files.src.length ){
                return grunt.fail.warn( 'No source files were found.' );
            }

            try {
                files.src.forEach( function( filepath ){
                    var input = grunt.file.read( filepath ),
                        output = linter.checkString( input );

                    if( output.length > 0 ){
                        output.forEach( function( errorObject ){
                            grunt.log.warn( 'Error on line ' + errorObject.line + ': ' + errorObject.message );
                        });
                    }

                    if( output.length > 0 && failOnError ){
                        grunt.fail.warn( 'Found ' + output.length + ' errors' );
                    }
                });
            } catch ( error ){
                grunt.fail.fatal( error );
            }
        });
    });
};
