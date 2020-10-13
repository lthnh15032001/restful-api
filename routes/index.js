
"use strict";
// import { Router } from "express";
// const router = Router();
const express = require('express')
const router = express.Router()
router.get('/', async (req, res) => {
    res.send("hello world")

})

// export default router;
module.exports = router;