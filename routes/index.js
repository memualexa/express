var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/fullscreen', function(req, res, next) {
  res.render('fullscreen', { title: 'fullscreen' });
});

router.get('/res1', function(req, res, next) {
  res.render('serviceworker', { title: 'serviceworker' });
});

router.get('/homescreen', function(req, res, next) {
  res.render('homescreen', { title: 'homescreen' });
});

module.exports = router;
