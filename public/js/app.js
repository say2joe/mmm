'use strict';

angular.module('mean', ['ngCookies', 'ngResource', 'ui.bootstrap', 'ui.router', 'mean.system']);
angular.module('mean.system', []);

// Setup global variables
var app = app || angular, MMM = MMM || {
    title: 'Mobile Majority (with MEAN)'
};

// Use module pattern for scope
(function(ng, ns, global, undefined) {
    
    console.log('ng:', ng, 'ns:', ns, 'global:', global);
    
})(app, MMM, window);