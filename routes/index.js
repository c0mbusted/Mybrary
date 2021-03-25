//we set up all routes of our app
const express = require('express')
//router portion
const router = express.Router() //when in sever line 9 we require it it will be set to one var here, theyre linked
//get route f app, takes 2 params, request and response
router.get('/', (req,res) => {
    res.render('index')
})
//now we import router to server.js bc it doesnt know it exists yet
//we got error now we export
module.exports = router