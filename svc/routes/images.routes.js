const express = require('express');
const router = express.Router();

const controller = require('../controllers/image.controller');
const multer= require('../middlewares/multer-config');

router.get('/:id', controller.getOne);
router.post('/', multer, controller.create);
router.delete('/:id',multer, controller.delete);

module.exports = router;