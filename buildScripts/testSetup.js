// this file isn't transpiled, so must use commonJS and ES5

//Register babel to transpile before our tests run.
require('babel-register'); {};

//Disable webpack feactures that Mocha doesn't understand.
require.extensions['.css'] = function() {};