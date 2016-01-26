/*
* grunt-lesshint
* https://github.com/kokarn/grunt-lesshint
*
* Copyright (c) 2015 Oskar Risberg
* Licensed under the MIT license.
*/

'use strict';

var Lesshint = require( 'lesshint' ),
    chalk = require( 'chalk' ),
    configLoader = require( 'lesshint/lib/config-loader' );

module.exports = function( grunt ){
    grunt.registerMultiTask( 'lesshint', 'Lint lesscss files', function(){
        var options = this.options(),
            linter = new Lesshint(),
            success = true,
            config;

        if( options.lesshintrc === true ){
            // let lesshint find the options itself
            config = configLoader();
        } else if( options.lesshintrc ){
            // Read Lesshint options from a specified .lesshintrc file.
            config = configLoader( options.lesshintrc );
        } else {
            config = options;
        }

        if( config ){
            linter.configure( config );
        }

        this.files.forEach( function( files ){
            var errorCount = 0,
                errorFileCount = 0,
                cleanFileCount = 0,
                response;

            if( !files.src.length ){
                return grunt.fail.warn( 'No source files were found.' );
            }

            try {
                files.src.forEach( function( filepath ){
                    var input = grunt.file.read( filepath ),
                        output = linter.checkString( input ),
                        inputArray;

                    if( output.length > 0 ){
                        errorFileCount = errorFileCount + 1;
                        inputArray = input.toString().split( '\n' );

                        grunt.log.writeln();
                        grunt.log.subhead( '  ' + filepath );
                        output.forEach( function( errorObject ){
                            errorCount = errorCount + 1;
                            grunt.log.writeln( '    ' + errorObject.line + ' | ' + chalk.gray( inputArray[ errorObject.line - 1 ] ) );
                            grunt.log.writeln( grunt.util.repeat( errorObject.column + 7, ' ' ) + '^ ' + errorObject.message );
                        });

                        grunt.log.writeln();
                    } else {
                        cleanFileCount = cleanFileCount + 1;
                    }
                });
            } catch ( error ){
                grunt.fail.fatal( error );
            }

            if( errorCount > 0 ){
                response = errorCount + grunt.util.pluralize( errorCount, ' error in / errors in ' ) + errorFileCount + grunt.util.pluralize( errorFileCount, ' file/ files' );

                if( cleanFileCount > 0 ){
                    response = response + ' and ' + cleanFileCount + grunt.util.pluralize( cleanFileCount, ' clean file./ clean files.' );
                } else {
                    response = response + '.';
                }

                grunt.log.warn( response );

                success = false;
            } else {
                grunt.log.ok( cleanFileCount + grunt.util.pluralize( cleanFileCount, ' file / files ' ) + 'without linting errors.' );
            }
        });

        if( options.force ){
            success = true;
        }

        return success;
    });
};
