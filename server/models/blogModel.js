const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        default: null
    },
    author: {
        type: String,
        required: true
    }
},{ timestamps: true })

module.exports = mongoose.model("blog", blogSchema);
