const express = require('express');
const router = express.Router();
const mainController = require(../controllers/mainController);

/**
 * App rputes
 */
router.get('/', mainController.homepage);

module.exports = router;