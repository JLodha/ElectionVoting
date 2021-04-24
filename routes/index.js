var express = require('express');
var router = express.Router();
//var multer = require('multer');
//var QRCode = require('qrcode');
//var helper = require('./../helpers/helper');
//var keyConfig = require('./../config');
//var QrCode = require('qrcode-reader');
//var Jimp = require("jimp");

/*var upload = multer({
	dest: 'uploads/'
});*/

router.get('/', function (req, res, next) {
	res.render('index');
});

router.get('/register', function (req, res, next) {
	res.render('register');
});

router.get('/vote', function (req, res, next) {
	res.render('vote');
});

router.get('/results', function (req, res, next) {
	res.render('results');
});





module.exports = router;