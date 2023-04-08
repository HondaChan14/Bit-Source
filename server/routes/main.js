const express = require('express');
const { createIssue } = require('../controllers/issueController');
const router = express.Router();
const homeController = require('../controllers/homeController');

// Get all Github issues
router.get('/', homeController.getIssues);

// Get an issue
router.get('/:id', (req, res) => {
    res.json({ mssg: 'Get an issue' });
});

// Post Github issue
router.post('/', createIssue);

// Delete Github issue
router.delete('/:id', (req, res) => {
    res.json({ mssg: 'Deleted an issue' });
});

// Update Github issue
router.patch('/:id', (req, res) => {
    res.json({ mssg: 'Updated an issue' });
});

module.exports = router;
