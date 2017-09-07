let express = require('express');
let router = express.Router();
const models = require('../models')

router.get('/', (req, res) => {
    models.Student.findAll()
        .then(data_students => {
            res.render('students', {data: data_students})
        })
        .catch(err => {
            console.log(err)
        })
})

router.get('/add', (req,res) => {
    res.render('students_add') //lempar ke form
})

router.post('/add', (req, res) => {
    models.Student.create({
        first_name: `${req.body.first_name}`,
        last_name: `${req.body.last_name}`,
        email: `${req.body.email}`.toLowerCase(),
        createdAt: new Date(),
        udpatedAt: new Date()
    })
    .then(student => {
        res.redirect('/students')
    })
    .catch(err => {
        console.log(err)
    })
})

//delete
router.get('/delete/:id', (req,res) => {
    models.Student.destroy({
        where: {
            id: `${req.params.id}`
        }
    })
    .then((rowDeleted) => {
        res.redirect('/students')
    })
    .catch(err => {
        console.log(err)
    })
})

//edit
router.get('/edit/:id', (req,res) => {
    models.Student.findAll({
        where: {
            id: `${req.params.id}`
        }
    })
    .then(student => {
        res.render('student_edit',{student: student})
    })
    .catch(err => {
        console.log(err)
    })
})

router.post('/edit/:id',(req, res) => {
    models.Student.update({
        first_name: `${req.body.first_name}`,
        last_name: `${req.body.last_name}`,
        email: `${req.body.email}`.toLowerCase(),
        createdAt: new Date(),
        udpatedAt: new Date()
    }, {
        where: {id: `${req.params.id}`}
    })
    .then(student => {
        res.redirect('/students')
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = router