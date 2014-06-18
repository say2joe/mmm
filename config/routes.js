var async = require('async');

module.exports = function(app) {
    var index = require('../app/controllers/index'),
        ads = require('../app/controllers/ads');
    
    app.get('/ads/:id', ads.tracking);
    
    app.get('*', index.render);
};