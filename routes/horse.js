const express = require('express');
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const { Horse } = require('../db/models/index');
const HorsesView = require('../views/horses/Horses');
const NewHorse = require('../views/horses/New');
const ShowHorse = require('../views/horses/Show');

const router = express.Router();

router.get('/', async (req, res) => {
  const horses = await Horse.findAll({ raw: true });

  const horsesView = React.createElement(HorsesView, { horses });
  const html = ReactDOMServer.renderToStaticMarkup(horsesView);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.get('/new', (req, res) => {
  const newHorse = React.createElement(NewHorse, { error: req.flash('error') });
  const html = ReactDOMServer.renderToStaticMarkup(newHorse);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.post('/', (req, res) => {
  Horse.create({
    name: req.body.name,
    breed: req.body.breed,
    age: req.body.age,
  }).then((createdHorse) => {
    const newHorse = createdHorse.get({ plain: true });
    res.redirect(`/horses/${newHorse.id}`);
  }).catch((error) => {
    req.flash('error', error.toString());
    res.redirect('/horses/new');
  });
});

router.get('/:id', async (req, res) => {
  const horse = await Horse.findByPk(req.params.id, { raw: true });

  const showHorse = React.createElement(ShowHorse, { horse });
  const html = ReactDOMServer.renderToStaticMarkup(showHorse);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

module.exports = router;
