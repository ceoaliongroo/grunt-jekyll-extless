# grunt-jekyll-extless

Grunt task to transform the jekyll _post pages, to file extless for Amazon S2 plataform.

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-jekyll-extless --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-jekyll-extless');
```

## The "jekyll_extless" task

### Overview
In your project's Gruntfile, add a section named `jekyll_extless` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  jekyll_extless: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.script
Type: `String`
Default value: `'./rename.sh'`

Path and filename of the bash script file that rename the files created from the jekyll's _post folders.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  jekyll_extless: {
    options: {},
    target: {
      // It's necessary define the targets
      src: ['app/_posts/**/*.md'],
      dest: 'dist/'
    },
  },
})
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  jekyll_extless: {
    options: {
      // Define a new script to test.
      separator: '/scripts/newRename.sh '
    },
    target: {
      // It's necessary define the targets
      src: ['app/_posts/**/*.md'],
      dest: 'dist/'
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2014 Carlos Mantilla. Licensed under the MIT license.
