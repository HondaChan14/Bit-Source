require('dotenv').config();
const fetch = require('node-fetch');
const GITHUB_API_BASE_URL = process.env.GITHUB_API_BASE_URL;

// Fetch Github API issues
const fetchGitHubIssues = async (selectedLanguage) => {
    // Fetch GitHub issues using the provided URL
    const response = await fetch(`${GITHUB_API_BASE_URL}/search/issues?q=label:"good+first+issue"+language:${selectedLanguage}+is:open+no:assignee&sort=created&order=desc&per_page=100`);
    // Check if the API request was successful
    if (!response.ok){
        throw new Error('Failed to fetch data. Please try again later.')
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
        const selectedLanguage = req.params.language || "javascript";
        try {
            // Fetch GitHub issues from the API
            const data = await fetchGitHubIssues(selectedLanguage);
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
