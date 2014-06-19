'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AdModel = module.exports = mongoose.model('Ad',
    new Schema({
        ad_id: String,
        title: String,
        url: String,
        alt: String,
        active: Boolean,
    })
);

function addDefaultAds () {
    return AdModel.create([
        {
            ad_id: 'Ad-Amazon',
            title: 'Amazon Ad',
            url: 'images/amazon-affiliate-link.jpg',
            alt: 'First clickable advertisement',
            active: true,
        },
        {
            ad_id: 'Ad-StateFarm',
            title: 'State Farm',
            url: 'images/driver-feedback-banner.jpg',
            alt: 'Second clickable advertisement',
            active: true,
        },
        {
            ad_id: 'Ad-711',
            title: '7-Eleven',
            url: 'images/711-bday-ad.jpg',
            alt: 'Third clickable advertisement',
            active: true,
        }
    ]);
}

var reDefaultAds = /Ad\-(Amazon|StateFarm|711)/i;

AdModel.find({ ad_id: reDefaultAds }, function(err, docs) {
    if (docs.length !== 3) addDefaultAds();
});
