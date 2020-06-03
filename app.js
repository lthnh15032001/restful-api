const express = require('express')
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')
const postRoute = require('./routes/posts');
const taskRoute = require('./routes/taskRoute')
const userRoute = require('./routes/users');
const courseRoute = require('./routes/course')
const tagRoute = require('./routes/tag')
const todoRoute = require('./routes/todoRoute')
const noteRoute = require('./routes/noteRoute')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json');
const cors = require('cors')
const port = process.env.PORT
app.use(cors());
app.use(bodyParser.json())
console.log(port)


app.use('/posts', postRoute)
app.use('/users', userRoute)
app.use('/courses', courseRoute)
app.use('/tasks', taskRoute)
app.use('/note', noteRoute)
app.use('/tag', tagRoute)
app.use('/todoList', todoRoute)
app.use("/data", express.static(__dirname + '/data'));
app.get('/', swaggerUi.serve, (req, res) => {
    res.send("Welcome to my Restful API ")
})
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("Connected to database")
    }
)

app.listen(port)