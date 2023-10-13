const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/RestaurantController');

router.post('/restaurant', restaurantController.create);
router.get('/restaurant', restaurantController.findAll);
router.put('/restaurant/:id', restaurantController.update);
router.delete('/restaurant/:id', restaurantController.delete);

module.exports = router;