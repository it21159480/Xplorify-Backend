const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.post('/blog', blogController.create);
router.get('/blog', blogController.findAll);
router.put('/blog/:id', blogController.update);
router.delete('/blog/:id', blogController.delete);

module.exports = router;
