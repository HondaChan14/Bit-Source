const Issue = require('../models/IssueModel');

// Get all Github issues

// Get a single issue

// Post Github issue
const createIssue = async (req, res) => {
    const { title, description, labels } = req.body;
    // Add issue to DB
    try {
        const newIssue = await Issue.create({
            title,
            description,
            labels,
        });
        res.status(200).json(newIssue);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// Delete Github issue

// Update Github issue

module.exports = {
    createIssue,
};
