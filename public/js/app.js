'use strict';

angular.module('mean', ['ngCookies', 'ngResource', 'ui.bootstrap', 'ui.router', 'mean.system']);
angular.module('mean.system', []);

// Setup global variables
var app = app || angular,
    d3 = d3 || app.noop,
    MMM = MMM || {
        title: 'Mobile Majority (with MEAN)',
        ng: app,
        d3: d3
    };

// Use module pattern for scope
(function(app, global, undefined) {
    
    console.log('app:', app, 'global:', global);
    
})(MMM, window);