require('dotenv').config()

const validateAPIKey = (validAPIKey) => (req, res, next) => {
    console.log(`path ${req.path}`)
    /*
    const APIKey = req.header('X-API-Key')
    console.log(req.path)
    if (APIKey != validAPIKey && req.path != '/') {
        const response = { error: "Must provide correct API key" }
        return res.status(403).json(response)
    }*/

    next()
}

module.exports = { validateAPIKey }