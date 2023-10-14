const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    hotelName:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
    },
    contactNo:{
        type: Number,
        required: true
    },
    noOfPersons:{
        type: Number,
        required: true
    },
    selectedSuite:{
        type: String,
        required: true
    },
    checkInDate:{
        type: Date,
        required: true
    },
    checkOutDate:{
        type: Date,
        required: true
    },
},
{
    timestamps: true
});

module.exports = mongoose.model('Hotel', hotelSchema);
