import React from 'react';
import GoodFirstIssueCard from './GoodFirstIssueCard';

function IssueBoard({ issues }) {
    return (
        <>
            <div className='min-h-screen bg-background p-10 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-5 gap-4'>
                {issues.map((issue) => (
                    <GoodFirstIssueCard key={issue.id} issue={issue} />
                ))}
            </div>
        </>
    );
}

export default IssueBoard;
