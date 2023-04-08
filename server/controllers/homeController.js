const fetch = require("node-fetch");

module.exports = {
  getIssues: async (req, res) => {
    try {
      const info = await fetch(
        'https://api.github.com/search/issues?q=label:"good+first+issue"+language:javascript+is:open+no:assignee&sort=created&order=desc&per_page=10'
      );
      const data = await info.json();
      const issues = data.items.filter(item => !item.pull_request);
      const recentIssues = issues.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      const filteredIssues = recentIssues.filter(issue => issue.assignee === null);
      res.json(filteredIssues);
    } catch (error) {
      console.error(`${error} is coming from issues.js`);
      res.status(500).json({ error: 'Server error' });
    }
  }
};

