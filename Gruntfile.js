/*
* grunt-lesshint
* https://github.com/kokarn/grunt-lesshint
*
* Copyright (c) 2015 Oskar Risberg
* Licensed under the MIT license.
*/

module.exports = function( grunt ){
    'use strict';
    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ]
        },

        lesshint: {
            files: {
                src: [ 'test/fixtures/**/*.less' ]
            },
            useForce: {
                options: {
                    force: true
                },
                files: {
                    src: [ 'test/fixtures/**/*.less' ]
                }
            },
            noErrors: {
                files: {
                    src: [ 'test/fixtures/errorless.less' ]
                }
            },
            customOptions: {
                options: {
                    spaceAfterPropertyColon: 'no_space',
                    spaceBeforeBrace: 'no_space'
                },
                files: {
                    src: [ 'test/fixtures/errors.less' ]
                }
            },
            useLesshintRc: {
                options: {
                    lesshintrc : 'test/.lesshintrc'
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
