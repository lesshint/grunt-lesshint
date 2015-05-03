/*
* grunt-lesshint
* https://github.com/kokarn/grunt-lesshint
*
* Copyright (c) 2015 Oskar Risberg
* Licensed under the MIT license.
*/

'use strict';

module.exports = function( grunt ){
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        lesshint: {
            files: {
                src: [ 'test/fixtures/**/*.less' ]
            },
            use_force: {
                options: {
                    force: true
                },
                files: {
                    src: [ 'test/fixtures/**/*.less' ]
                }
            },
            no_errors: {
                files: {
                    src: [ 'test/fixtures/errorless.less' ]
                }
            },
            custom_options: {
                options: {
                    spaceAfterPropertyColon: 'no_space',
                    spaceBeforeBrace: 'no_space'
                },
                files: {
                    src: [ 'test/fixtures/errors.less' ]
                }
            }
        },

        // Unit tests.
        nodeunit: {
            tests: [ 'test/*_test.js' ]
        }

    });

    grunt.loadTasks( 'tasks' );

    grunt.loadNpmTasks( 'grunt-contrib-jshint' );
    grunt.loadNpmTasks( 'grunt-contrib-nodeunit' );

    grunt.registerTask( 'test', [ 'nodeunit' ] );

    // By default, lint and run all tests.
    grunt.registerTask( 'default', [ 'jshint', 'test' ] );

};
