import React from 'react';

const issueTags = {
    'Good first issue': 'Good first issue',
    Documentation: 'Documentation',
    Bug: 'Bug',
    Duplicate: 'Duplicate',
    Enhancement: 'Enhancement',
    'Help wanted': 'Help wanted',
    Invalid: 'Invalid',
    Question: 'Question',
    'Wont fix': 'Wontfix',
};

const IssueTag = ({ issueTag }) => {
    if (issueTags.hasOwnProperty(issueTag)) {
        return (
            <div className='p-1'>
                <span className='label'>{issueTag}</span>
            </div>
        );
    }
    return null;
};

export default IssueTag;
