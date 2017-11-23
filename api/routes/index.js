var express = require('express');
var router  = express.Router();

var ctrlHotels = require('../controllers/hotels.controllers.js');
var ctrlAuths = require('../controllers/authors.controllers.js');



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
  .get(ctrlAuths.authsGetOne);


module.exports = router;
