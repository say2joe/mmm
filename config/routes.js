var async = require('async'),
    AdModel = require('../app/models/ad'),
    AdClickModel = require('../app/models/adclick');

module.exports = function(app) {
    var index = require('../app/controllers/index');
    
    app.get('/ads/:id', function(req, res) {
        var id = req.params.id;
        AdClickModel.create({
                ad_id: id,
                time_stamp: (new Date()),
                referrer: req.get('Referer')
                // Using actual misspelled header
            },
            function(err, adclick) {
                if (err) res.send(err);
                AdClickModel.find(
                    { ad_id: adclick.ad_id },
                    function(err, adclicks) {
                        if (err) res.send(err);
                        console.log(adclicks);
                        res.redirect('/');
                    }
                );
            }
        );
    });
    
    app.get('*', index.render);
};