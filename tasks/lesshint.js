/*
* grunt-lesshint
* https://github.com/kokarn/grunt-lesshint
*
* Copyright (c) 2015 Oskar Risberg
* Licensed under the MIT license.
*/

'use strict';

var Lesshint = require( 'lesshint' ).Lesshint,
    chalk = require( 'chalk' );

module.exports = function( grunt ){
    grunt.registerMultiTask( 'lesshint', 'Lint lesscss files', function(){
        var options = this.options(),
            linter = new Lesshint(),
            success = true,
            config;

        if( options.lesshintrc === true ){
            // let lesshint find the options itself
            config = linter.getConfig();
        } else if( options.lesshintrc ){
            // Read Lesshint options from a specified .lesshintrc file.
            config = linter.getConfig( options.lesshintrc );
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
                warningCount = 0,
                response;

            if( !files.src.length ){
                return grunt.fail.warn( 'No source files were found.' );
            }

            try {
                files.src.forEach( function( filepath ){
                    var input = grunt.file.read( filepath ),
                        output = linter.checkString( input, filepath ),
                        inputArray;

                    if( output.length > 0 ) {
                        if (options.reporter && options.reporter.report) {
                            // use custom reporter if there
                            options.reporter.report(output);
                            errorFileCount += 1;
                            output.forEach(function (reportObject) {
                                if (reportObject.severity === "error") {
                                    errorCount = errorCount + 1;
                                } else {
                                    warningCount = warningCount + 1;
                                }
                            });
                        } else {
                            // use built in reporter
                            errorFileCount = errorFileCount + 1;
                            inputArray = input.toString().split( '\n' );

                            grunt.log.writeln();
                            grunt.log.subhead( '  ' + filepath );
                            output.forEach(function (reportObject) {
                                if (reportObject.severity === "error") {
                                    errorCount = errorCount + 1;
                                } else {
                                    warningCount = warningCount + 1;
                                }

                                grunt.log.writeln( '    ' + reportObject.line + ' | ' + chalk.gray( inputArray[ reportObject.line - 1 ] ) );
                                grunt.log.writeln( grunt.util.repeat( reportObject.column + 7, ' ' ) + '^ ' + reportObject.message );
                            });

                            grunt.log.writeln();
                        }

                    } else {
                        cleanFileCount = cleanFileCount + 1;
                    }
                });
            } catch ( error ){
                grunt.fail.fatal( error );
            }

            if (warningCount > 0 || errorCount > 0) {
                response =
                    warningCount + grunt.util.pluralize(errorCount, ' warning/ warnings') +
                    " and " + errorCount + grunt.util.pluralize(errorCount, ' error in / errors in ') +
                    errorFileCount + grunt.util.pluralize(errorFileCount, ' file/ files');

                if( cleanFileCount > 0 ){
                    response = response + ' and ' + cleanFileCount + grunt.util.pluralize( cleanFileCount, ' clean file./ clean files.' );
                } else {
                    response = response + '.';
                }

                grunt.log.warn( response );

                if (options.allowWarnings === true && errorCount === 0) {
                    success = true;
                } else {
                    success = false;
                }
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
