const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true,
        unique: true
    },
    description : {
        type: String,
        required: true,
        unique: true
    },
    photo : {
        type: String,
        required: false,
    },
    username : {
        type: String,
        required: false,
    },
    category: {
        type: Array,
        required: false
    }
}, {timestamps: true});

module.exports = mongoose.model("post", postSchema);