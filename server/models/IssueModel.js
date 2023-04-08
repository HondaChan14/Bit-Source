const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const IssueSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        labels: {
            type: [String],
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Issue', IssueSchema);
