/*
* grunt-lesshint
* https://github.com/kokarn/grunt-lesshint
*
* Copyright (c) 2015 Oskar Risberg
* Licensed under the MIT license.
*/

'use strict';

module.exports = function( grunt ){

    // Project configuration.
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
            }
        },

        // Unit tests.
        nodeunit: {
            tests: [ 'test/*_test.js' ]
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks( 'tasks' );

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks( 'grunt-contrib-jshint' );
    grunt.loadNpmTasks( 'grunt-contrib-nodeunit' );

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask( 'test', [ 'lesshint', 'nodeunit' ] );

    // By default, lint and run all tests.
    grunt.registerTask( 'default', [ 'jshint', 'test' ] );

};
