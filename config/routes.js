var async = require('async');

module.exports = function(app) {
    var index = require('../app/controllers/index');
    app.get('/', index.render);

};