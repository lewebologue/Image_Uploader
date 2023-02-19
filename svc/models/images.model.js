const mongoose = require('mongoose');

const imageModel = mongoose.Schema({
    imageUrl: { type: String, required: true }
});

module.exports = mongoose.model('Images', imageModel);