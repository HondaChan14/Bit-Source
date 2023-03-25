const express = require('express')
const router = express.Router()
const homeController = require('../controllers/issues')

router.get('/', homeController.getIssues);

module.exports = router;