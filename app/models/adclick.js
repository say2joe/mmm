'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

module.exports = mongoose.model('AdClick',
    new Schema({
        ad_id: String,
        referrer: String,
        time_stamp: Date
    })
);