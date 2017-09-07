const express = require('express')
const app = express()
const bodyParser = require('body-parser');


app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.render('index')
})

//==================Call Routes===============================//
let teachers = require('./routes/teachers.js')
let subjects = require('./routes/subjects.js')
let students = require('./routes/students.js')

// ===================== routing =================================//
app.use('/teachers', teachers)
app.use('/subjects', subjects)
app.use('/students', students)
// =================== end of routing  ========================== //


app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})