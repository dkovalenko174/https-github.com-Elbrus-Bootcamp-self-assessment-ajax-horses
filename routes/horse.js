const express = require('express');
const router = express.Router();
const models = require('./../models/index')
const Horse = models.horse;
let error = '';

router.get('/', async function(req, res, next) {
    let horses = await Horse.findAll();
    res.render('horses/index', { horses });
});

router.get('/new', function(req, res, next) {
    res.render('horses/new', {error});
});

router.post('/', function(req, res, next) {
    Horse.create({
        name: req.body.name,
        breed: req.body.breed,
        age: req.body.age
    }).then((horse) => {
        res.redirect(`/horses/${horse.id}`);
    }).catch(function (err) {
        error = err;
        res.redirect('/horses/new');
    });
});

router.get('/:id', async function(req, res, next) {
    let horse = await Horse.findById(req.params.id);
    res.render('horses/show', {horse});
});
module.exports = router;
