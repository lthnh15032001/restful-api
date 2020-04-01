const express = require('express')
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser') 
require('dotenv/config')
const postRoute = require('./routes/posts');
const userRoute = require('./routes/users');
const courseRoute = require('./routes/course')
const cors = require('cors')

app.use(cors());
app.use(bodyParser.json())

app.use('/posts', postRoute)
app.use('/users', userRoute)
app.use('/courses', courseRoute)
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true},
() => {
    console.log("Connected to database")
}
)

app.listen(3000)