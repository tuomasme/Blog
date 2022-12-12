const mongoose = require('mongoose')

// Create schema
const BlogPostSchema = new mongoose.Schema({
    title: String,
    text: String
})

module.exports = mongoose.model('todo', BlogPostSchema)