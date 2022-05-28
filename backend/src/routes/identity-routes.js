require('dotenv').config()
const express = require('express')
const router = express.Router()

const RANDOM = Math.random()*10000
router.get('/', (req, res) => {
    return res.status(200).send(`My random is ${RANDOM}`)    
})

module.exports = router