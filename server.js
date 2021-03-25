if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}//to load all vars from .env file

//import express from express library 
const express = require('express')
//get app portion of that
const app= express()
//get express layout package
const expressLayouts= require('express-ejs-layouts')

//we hook router nd below tell it to use it line 22
const indexRouter = require('./routes/index')
//set our view engine ejs is our ve
app.set('view engine', 'ejs')
//set where views are coming from and put them in a views directory 
app.set('views', __dirname + '/views')//create views directory

//hookup epresslayouts, every single file is gonna b put inside layout file to avoid duplicating beg and end html file like header and footer
app.set('layout', 'layouts/layout')
//tell app we want to use express layouts
app.use(expressLayouts)
//tell express where our public files are gonna b imgs, stylefiles, etc..
app.use(express.static('public'))

app.use('/', indexRouter)

//mongodb
const mongoose = require('mongoose')
//setup connection for db
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('connected to mongoose'))
//
//listen on certain port, server tells us what port, but we default it to 3000

app.listen(process.env.PORT || 3000)

