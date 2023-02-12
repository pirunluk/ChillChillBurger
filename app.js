const express = require('express')
const path = require('path')
const app = express()
const router = require('./router/myroutes')

app.set('views',path.join(__dirname,'public'))
app.set('view engine','ejs')

app.use(express.urlencoded({extended:false}))
app.use(router)

app.listen(8000,()=>{
    console.log('start server on port 8000');
})
