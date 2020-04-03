const express = require('express')

const router = express.Router();

const User = require('../models/Users')
const { registerValidation, LoginValidation } = require('../validation')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.post('/register', async (req, res) => {
    // validate data before add usersssss
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message)
    // check if the user is already in the database
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) {
        return res.status(400).send("Email đã tồn tại ")
    }
    // hash password
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)
    // create new users
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
    });
    try {
        const savedUser = await user.save();
        res.send({ user: user._id });
    } catch (err) {
        res.status(400).send(err);
    }
})

//Login

router.post('/login', async (req, res) => {
    // validate data before add usersssss
    const { error } = LoginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message)
    // check if the email exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).send("Email khong ton tai")
    }
    // password is correct ??
    const validPass = await bcrypt.compare(req.body.password, user.password)
    if(!validPass) return res.status(400).send("Sai password")

    //Create and asssign a token
    const token = jwt.sign({_id: user.id}, process.env.TOKEN_SECRET)
    // res.header('auth_token', token)
    res.send(token)

})
module.exports = router

// {
// 	"email": "lethanhdatdev1222ss03@gmail.com",
// 	"password": "121212"
// } 