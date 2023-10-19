const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    blogTitle:{
        type: String,
        // required: true
    },
    bloggerName:{
        type: String,
        // required: true
    },
    bloggerEmail:{
        type: String,
        // required: true,
    },
    bloggerContact:{
        type: Number,
        // required: true
    },
    numDays:{
        type: Number,
        // required: true
    },
    blogCity:{
        type: String,
        // required: true
    },
    blogCountry:{
        type: String,
        // required: true
    },
    blogRating:{
        type: String,
        // required: true
    },
    blogDetails:{
        type: String,
        // required: true
    },
    checkInDate:{
        type: Date,
        // required: true
    },
    checkOutDate:{
        type: Date,
        // required: true
    },
    image: {
        type: String,
    },
},
{
    timestamps: true
});

module.exports = mongoose.model('blog', blogSchema);
