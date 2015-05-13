# grunt-lesshint

> Lint LESSCSS files with grunt

[![Dependency Status](https://david-dm.org/kokarn/grunt-lesshint.svg?theme=shields.io&style=flat)](https://david-dm.org/kokarn/grunt-lesshint)
[![devDependency Status](https://david-dm.org/kokarn/grunt-lesshint/dev-status.svg?theme=shields.io&style=flat)](https://david-dm.org/kokarn/grunt-lesshint#info=devDependencies)

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-lesshint --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks( 'grunt-lesshint' );
```

## The "lesshint" task

### Overview
In your project's Gruntfile, add a section named `lesshint` to the data object passed into `grunt.initConfig()`.


```js
grunt.initConfig({
    lesshint: {
        options: {
            // Task-specific options go here.
        },
        your_target: {
            // Target-specific file lists and/or options go here.
        },
    },
});
```
## Options

#### force
Type: `Boolean`
Default value: `false`

Set `force` to `true` to report lesshint errors but not fail the task.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
|Date|Version|Changes|
|---|---|---|
|2015-05-11|0.2.3|Update lesshint to 0.4.1|
|2015-05-11|0.2.2|<ul><li>Use <code>Lesshint</code> instead of <code>LessHint</code></li><li>Don't fail the linter after every file with errors</li></ul>|
|2015-05-11|0.2.1|Update lesshint to 0.4.0|
|2015-05-03|0.2.0|Add support for passing options to lesshint|
|2015-05-03|0.1.6|Update lesshint to 0.3.1|
|2015-05-03|0.1.5|Update lesshint to 0.3.0|
|2015-04-27|0.1.4|<ul><li>Update lesshint to 0.2.0</li><li>Fix duplicate whitespace</li></ul>|
|2015-04-24|0.1.3|<ul><li>Update lesshint to 0.1.5</li><li>Use lesshint defaults instead of our own</li></ul>|
|2015-04-22|0.1.2|<ul><li>Updated testfiles and tests</li><li>Update devDependencies</li></ul>|
|2015-04-21|0.1.1|Readme fixes|
|2015-04-21|0.1.0|Initial release|
