const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const BlogPostRoute = require('./routes/blogPosts')

const app = express()

// Get data into json format
app.use(express.json())

const PORT = process.env.PORT || 5000

// Connect to database
mongoose.connect(process.env.DB_CONNECT)
.then(() => console.log('Database connected'))
.catch(err => console.log(err))

app.use('/', BlogPostRoute)

// Connect to server
app.listen(PORT, () => console.log("Server connected"))