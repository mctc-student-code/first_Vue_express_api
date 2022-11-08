let express = require('express')
let routes = require('./routes/routes')
let path = require('path')
// const exp = require('constants')


let app = express()

// app.use(express.static(path.join(_dirname, 'hello-vue', 'dist')))



// the bottom is from the video slides

let pathToVueApp = path.join(__dirname, 'hello-vue', 'dist')

let vueApp = express.static(pathToVueApp)

app.use('/', vueApp)

app.use('/api', routes)

let server = app.listen(process.env.PORT || 3000, function(){
    console.log('Express server running on port', server.address().port)
})