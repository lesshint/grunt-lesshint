# grunt-lesshint

> Lint lesscss files

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
grunt.loadNpmTasks('grunt-lesshint');
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

### Options

#### options.separator
Type: `String`
Default value: `',  '`

A string value that is used to do something with whatever.

#### options.punctuation
Type: `String`
Default value: `'.'`

A string value that is used to do something else with whatever else.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  lesshint: {
    options: {},
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  lesshint: {
    options: {
      separator: ': ',
      punctuation: ' !!!',
    },
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
|Date|Version|Changes|
|---|---|---|
|2015-05-03|0.1.5|Update lesshint to 0.3.0|
|2015-04-27|0.1.4|<ul><li>Update lesshint to 0.2.0</li><li>Fix duplicate whitespace</li></ul>|
|2015-04-24|0.1.3|<ul><li>Update lesshint to 0.1.5</li><li>Use lesshint defaults instead of our own</li></ul>|
|2015-04-22|0.1.2|<ul><li>Updated testfiles and tests</li><li>Update devDependencies</li></ul>|
|2015-04-21|0.1.1|Readme fixes|
|2015-04-21|0.1.0|Initial release|
