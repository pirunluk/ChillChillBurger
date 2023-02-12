const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/',(req,res)=>{
    res.render('index.ejs')
})

router.get('/menu',(req,res)=>{
    res.render('menu.ejs')
})

router.get('/news',(req,res)=>{
    res.render('news.ejs')
})

router.get('/login',(req,res)=>{
    res.render('login.ejs')
})

router.get('/register',(req,res)=>{
    res.render('register.ejs')
})

module.exports = router