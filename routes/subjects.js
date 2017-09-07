let express = require('express');
let router = express.Router();
const models = require('../models')

router.get('/', (req, res) => {
    models.Subjects.findAll()
        .then(data_subjects => {
            res.render('subjects', {data: data_subjects})
        })
        .catch(err => {
            console.log(err)
        })
})

module.exports = router