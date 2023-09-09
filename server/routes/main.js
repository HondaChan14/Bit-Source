const express = require('express');
const router = express.Router();
const homeController = require('../controllers/issuesController');

router.get('/', homeController.getIssues);
router.get('/:language', homeController.getIssues);

module.exports = router;
