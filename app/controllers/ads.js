'use strict';

var // AdModel = require('../models/ad'),
    AdClickModel = require('../models/adclick');

exports.tracking = function(req, res) {
    var ad_id = req.params.id;
    
    AdClickModel.create(
        {
            ad_id: ad_id,
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
                }
            );
        }
    );
    
    res.redirect('/');
};