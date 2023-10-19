const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    make:{
        type: String,
    },
    model: {
        type: String,
    },
    year: {
        type: String,
    },
    registrationNumber: {
        type: String,
    },
    plateNumber: {
        type: String,
    },
    insuranceNumber: {
        type: String,
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
