var express = require('express');
var router = express.Router();
/*var helper = require('./../helpers/helper');
var keyConfig = require('./../config');*/

router.get('/a', function (req, res, next) {
	console.log("Hello #1");
	/*if (req.JWTData.userType == 'admin') {
		req.app.db.models.Voter.find({}, {
			"image": false
		}, function (err, data) {
			if (err) {
				console.log(err);
				return next(err);
			}

			req.app.db.models.Candidate.find({}, function (err, candidates) {
				if (err) {
					console.log(err);
					return next(err);
				}

				return res.render('admin', {
					JWTData: req.JWTData,
					voters: data,
					candidates: candidates
				});
			});
		});
	} else {
		return res.redirect('/admin/login');
	}*/
	res.render('adm');
});

module.exports = router;