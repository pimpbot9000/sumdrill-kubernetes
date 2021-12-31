require('dotenv').config()
const express = require('express')
const router = express.Router()
const BASE_URL = process.env.BASE_URL
router.get('/', (req, res) => {
    return res.status(200).send(`I'm healthy! Try ${BASE_URL}/scores`)    
})

module.exports = router