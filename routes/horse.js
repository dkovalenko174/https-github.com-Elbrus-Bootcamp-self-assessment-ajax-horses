const express = require('express');
const router = express.Router();

const {Horse} = require('../db/models/index')

router.get('/', async function(req, res, next) {
    let horses = await Horse.findAll({raw: true});
    res.render('horses/index', { horses });
});

router.get('/new', function(req, res, next) {
    res.render('horses/new', {error: req.flash('error')});
});

router.post('/', function(req, res, next) {
    Horse.create({
        name: req.body.name,
        breed: req.body.breed,
        age: req.body.age
    }).then((createdHorse) => {
        const newHorse = createdHorse.get({plain: true})
        res.redirect(`/horses/${newHorse.id}`);
    }).catch(error => {
        req.flash('error', error.toString());
        res.redirect('/horses/new');
    });
});

router.get('/:id', async function(req, res, next) {
    let horse = await Horse.findByPk(req.params.id, {raw: true});
    res.render('horses/show', {horse});
});
module.exports = router;
