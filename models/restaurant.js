const mongoose = require('mongoose');

const RestauranSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    note: {
        type: String,
        required: true,
    }

},
    {
        timestamps: true
    });

module.exports = mongoose.model('Restaurant', RestauranSchema);
