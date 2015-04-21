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
            task = this;

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
                        output = linter.checkString( input ),
                        inputArray;

                    if( output.length > 0 ){
                        inputArray = input.toString().split( '\n' );

                        grunt.log.writeln();
                        grunt.log.writeln( '  ' + chalk.bold( filepath ) );
                        output.forEach( function( errorObject ){
                            grunt.log.writeln( '    ' + errorObject.line + ' | ' + chalk.gray( inputArray[ errorObject.line - 1 ] ) );
                            grunt.log.writeln( grunt.util.repeat( errorObject.column + 7, ' ' ) + '^ ' + errorObject.message );
                        });

                        grunt.log.writeln();
                    }

                    if( output.length > 0 && !force ){
                        grunt.fail.warn( 'Task "' + task.name + '" failed.' );
                    }
                });
            } catch ( error ){
                grunt.fail.fatal( error );
            }
        });
    });
};
