import React from 'react';
import GoodFirstIssueCard from './GoodFirstIssueCard';

function IssueBoard({ issues }) {
  return (
    <div className="min-h-screen bg-slate-800 p-10 grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {issues.map(issue => (
        <GoodFirstIssueCard key={issue.id} issue={issue} />
      ))}
    </div>
  );
}

export default IssueBoard;