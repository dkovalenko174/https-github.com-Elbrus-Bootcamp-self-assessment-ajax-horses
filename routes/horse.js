const express = require('express');
const router = express.Router();
const Horse = require('../db/models/horse')

router.get('/', async function(req, res, next) {
    let horses = await Horse.find();
    res.render('horses/index', { horses });
});

router.get('/new', function(req, res, next) {
    res.render('horses/new', {error: req.flash('error')});
});

router.post('/', function(req, res, next) {
    new Horse({
        name: req.body.name,
        breed: req.body.breed,
        age: req.body.age
    }).save().then((horse) => {
        res.redirect(`/horses/${horse.id}`);
    }).catch(error => {
        req.flash('error', error.toString());
        res.redirect('/horses/new');
    });
});

router.get('/:id', async function(req, res, next) {
    let horse = await Horse.findById(req.params.id);
    res.render('horses/show', {horse});
});
module.exports = router;
