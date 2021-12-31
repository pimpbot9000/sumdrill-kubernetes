require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = express.Router()
const { createScore, getScores, deleteScores } = require('../controllers/score')

router.post('/', createScore)
router.get('/', getScores)
router.delete('/', cors(), deleteScores)

module.exports = router