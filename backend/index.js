require('dotenv').config()
const express = require('express')
const app = express()
const scoresRouter = require('./src/routes/scores-routes')
const baseRouter = require('./src/routes/base-routes')
const identityRouter = require('./src/routes/identity-routes')
const path = require('path')
const { validateAPIKey } = require('./src/middleware/middlewares')
const db = require('./src/db/db')
// run migrations when the app starts
db.migrate.latest()

const PORT = process.env.PORT || 8080
const APIKey = process.env.API_KEY
const BASE_URL = process.env.BASE_URL
//app.use(express.static('../build'))
app.use(express.json())
app.use(validateAPIKey(APIKey))
app.use('/', baseRouter) // healthcheck for Kubernetes
app.use(path.join(BASE_URL, '/scores'), scoresRouter)
app.use(path.join(BASE_URL, '/identity'), identityRouter)
console.log(process.env.API_KEY)
app.listen(PORT, () => console.log("Server is listening to port:", PORT))