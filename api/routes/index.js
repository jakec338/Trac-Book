var express = require('express');
var router  = express.Router();

var ctrlHotels = require('../controllers/hotels.controllers.js');
var ctrlAuths = require('../controllers/authors.controllers.js');
var ctrlUsers = require ('../controllers/users.controllers.js');


router
  .route('/json')
  .get(ctrlHotels.hotelsGetAll);
router
  .route('/json/:hotelId')
  .get(ctrlHotels.hotelsGetOne);

router
  .route('/json/new')
  .post(ctrlHotels.hotelsAddOne);

// Author routes
router
  .route('/json/:hotelId/author')
  .get(ctrlAuths.authsGetAll);

router
  .route('/json/:hotelId/author/:authorId')
  .get( ctrlAuths.authsGetOne);

//Authentication
router
.route('/users/register')
.post(ctrlUsers.register);


router
.route('/users/login')
.post(ctrlUsers.login);

router
.route('/users/addbook')
.put(ctrlUsers.addBook);

router
.route('/users/removebook')
.put(ctrlUsers.removeBook);

router
.route('/users/myprofile')
.get(ctrlUsers.authenticate, ctrlUsers.myprofile);

module.exports = router;
