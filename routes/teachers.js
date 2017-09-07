let express = require('express');
let router = express.Router();
const models = require('../models')

router.get('/', (req, res) => {
    models.Teacher.findAll()
        .then(data_teachers => {
            res.render('teachers', {data: data_teachers})
        })
        .catch(err => {
            console.log(err)
        })
})

module.exports = router