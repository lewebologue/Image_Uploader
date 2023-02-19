const express = require('express');
const router = express.Router();

const controller = require('../controllers/image.controller');
const multer= require('../middlewares/multer-config');

router.get('/:id', controller.getOne);
router.post('/', multer, controller.create);
router.delete('/:id', controller.delete);
router.patch('/:id', multer, controller.update);

module.exports = router;