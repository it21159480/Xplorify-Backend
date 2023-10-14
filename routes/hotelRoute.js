const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotelController');

router.post('/hotel', hotelController.create);
router.get('/hotel', hotelController.findAll);
router.put('/hotel/:id', hotelController.update);
router.delete('/hotel/:id', hotelController.delete);

module.exports = router;
