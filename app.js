const express = require('express')
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')
const postRoute = require('./routes/posts');
const userRoute = require('./routes/users');
const courseRoute = require('./routes/course')
const cors = require('cors')
const port = process.env.PORT
app.use(cors());
app.use(bodyParser.json())
console.log(port)
app.use('/posts', postRoute)
app.use('/users', userRoute)
app.use('/courses', courseRoute)

app.get('/', (req, res) => {
    res.send("Welcome to my Restful API ")
})
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("Connected to database")
    }
)

app.listen(port)