require('dotenv').config();
const fetch = require('node-fetch');
const GITHUB_API_URL = process.env.GITHUB_API_URL;

const fetchGitHubIssues = async () => {
    // Fetch GitHub issues using the provided URL
    const response = await fetch(GITHUB_API_URL);

    // Check if the API request was successful
    if (!response.ok){
        throw new Error(`GitHub API request failed with status: ${info.status}`);
    }
    // Return response in JSON
    return response.json();
}

// Filter out pull requests from the fetched issues
const filterOutPullRequests = (items) => {
    return items.filter((item) => !item.pull_request);
};

// Sort issues by creation date in descending order
const sortIssuesByCreationDate = (issues) => {
    return issues.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
};

// Filter out issues that are already assigned
const filterUnassignedIssues = (issues) => {
    return issues.filter((issue) => issue.assignee === null);
};

module.exports = {
    getIssues: async (req, res) => {
        try {
            // Fetch GitHub issues from the API
            const data = await fetchGitHubIssues();
            // Filter out UnassignedIssued - Sort by Creation Date - filter out pull requests
            const filteredIssues = filterUnassignedIssues(sortIssuesByCreationDate(filterOutPullRequests(data.items)))
            // Send the filtered issues as a JSON response
            res.json(filteredIssues)
        } catch (error) {
            // Handle any errors that occurred during the process
            res.status(500).json({ error: 'Server error' });
        }
    },
};
