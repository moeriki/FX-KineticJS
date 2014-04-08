Before doing all dev stuff make sure you have node installed. After that, run `npm install --dev` in the main directory to install the node module dependencies.

Run `grunt --help` to see all build options.

#Building the KineticJS Framework 

To build a development version of the framework, run `grunt dev`. To run a full build, which also produces the minified version and the individually minified modules for the custom build, run `grunt full`.  You can also run `grunt beta` to generate a beta version.   

If you add a file in the src directory, be sure to add the filename to the sourceFiles array variable in Gruntfile.js.

#Testing

[![Build Status](https://travis-ci.org/ericdrowell/KineticJS.png)](https://travis-ci.org/ericdrowell/KineticJS)

KineticJS uses Mocha for testing. 

* If you need run test only one time run `grunt test`.
* While developing it is easy to use `grunt server` with watch task. Just run it and go to [http://localhost:8080/test/runner.html](http://localhost:8080/test/runner.html). After src file change kinetic-dev.js will be automatically created, so you just need refresh test the page.

KineticJS is covered with hundreds of tests and well over a thousand assertions.  KineticJS uses TDD (test driven development) which means that every new feature or bug fix is accompanied with at least one new test. 

#Generation documentation

Run `grunt docs` and see created 'documentation' folder.

#NodeJS

Support of NodeJS is in alpha state!
And not published in npm.

We are using (node-canvas)[https://github.com/LearnBoost/node-canvas] to create canvas element.

* You have to install node-canvas dependencies (https://github.com/LearnBoost/node-canvas/wiki/_pages)[https://github.com/LearnBoost/node-canvas/wiki/_pages]
* Run `npm install KineticJS`

###Example
```javascript
var fs = require('fs'),
    Kinetic = require('KineticJS');

var layer = new Kinetic.Layer({
    width : 200,
    height : 200
});

var rect = new Kinetic.Rect({
    width : 100,
    height : 100,
    x : 50,
    y : 50,
    fill : 'green'
});
var text = new Kinetic.Text({
    text : 'Generated inside node js',
    x : 20,
    y : 20,
    fill : 'black'
});
layer.add(rect).add(text);
layer.draw();

var stream = layer.createPNGStream();
var file = fs.createWriteStream(__dirname + '/helloworld.png');
stream.on('data', function(chunk) {
  file.write(chunk);
});
```

#Pull Requests
I'd be happy to review any pull requests that may better the KineticJS project, in particular if you have a bug fix, enhancement, or a new shape (see `src/shapes` for examples).  Before doing so, please first make sure that all of the tests pass (`grunt test`). 
