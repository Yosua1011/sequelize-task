let express = require('express');
let router = express.Router();
const models = require('../models')

router.get('/', (req, res) => {
    models.Subjects.findAll({
        include: [{model: models.Teacher}]
    })
        .then(data_subjects => {
            res.render('subjects', {data_subjects: data_subjects})
        })
        .catch(err => {
            console.log(err)
        })
})

module.exports = router