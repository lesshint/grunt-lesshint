/*
* grunt-lesshint
* https://github.com/lesshint/grunt-lesshint
*
* Copyright (c) 2015 Oskar Risberg
* Licensed under the MIT license.
*/

module.exports = function( grunt ){
    'use strict';
    grunt.initConfig({
        jshint: {
            options: {
                "bitwise": true,
                "browser": true,
                "boss": true,
                "camelcase": true,
                "curly": true,
                "es3": true,
                "eqeqeq": true,
                "eqnull": true,
                "forin": true,
                "freeze": true,
                "immed": true,
                "indent": 4,
                "jquery": true,
                "newcap": true,
                "noarg": true,
                "node": true,
                "nonbsp": true,
                "noempty": true,
                "nonew": true,
                "passfail": true,
                "plusplus": true,
                "undef": true,
                "unused": true,
                "strict": true,
                "sub": true,
                "trailing": true
            },
            all: [
                'Gruntfile.js',
                'tasks/*.js'
            ],
            tests: {
                options: {
                    globals: {
                        "describe": true,
                        "it": true
                    }
                },
                files: {
                    src: [ 'test/*.js' ]
                }
            }
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
            },
            customReporter: {
                files: {
                    src: [ 'test/fixtures/**/*.less' ]
                },
                options: {
                    reporter: {
                        name: "test-reporter",
                        report: function(errors) {
                            errors.forEach(function(error) {
                                console.log("custom " + error.linter);
                            });
                        }
                    }
                }
            }
        },

        mochaTest: {
            test: {
                options: {
                    reporter: 'spec'
                },
                files: {
                    src: [ 'test/**/*.js' ]
                }
            }
        }

    });

    grunt.loadTasks( 'tasks' );

    grunt.loadNpmTasks( 'grunt-contrib-jshint' );
    grunt.loadNpmTasks( 'grunt-mocha-test' );

    grunt.registerTask( 'test', [ 'mochaTest' ] );

    // By default, lint and run all tests.
    grunt.registerTask( 'default', [ 'jshint', 'test' ] );

};
