let express = require('express')
let router = express.Router()

router.get('/', function(req, res, next){ //req means requests, res means responds
    res.json({'message': 'Hello! This is the Azure version, Checking to see if it works'})
    // stop the serve and run it again so it updates the message
})

module.exports = router
