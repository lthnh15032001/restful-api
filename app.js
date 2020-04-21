const express = require('express')
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')
const postRoute = require('./routes/posts');
const userRoute = require('./routes/users');
const courseRoute = require('./routes/course')
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