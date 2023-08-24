import React from 'react';

const tagClasses = {
    'good first issue': 'label-goodFirstIssue',
    documentation: 'label-documentation',
    bug: 'label-bug',
    duplicate: 'label-duplicate',
    enhancement: 'label-enhancement',
    'help wanted': 'label-helpWanted',
    invalid: 'label-invalid',
    question: 'label-question',
    wontfix: 'label-wontfix',
    default: 'label-misc', // Add a default class for the 'misc' key
};

const defaultClassName = 'label-misc';

const IssueTag = ({ issueTag }) => {
    const normalizedTag = issueTag.toLowerCase();
    const tagClass = tagClasses[normalizedTag] || defaultClassName;

    return tagClass === defaultClassName ? null : (
        <div className='p-1'>
            <span className={`label ${tagClass}`}>{issueTag}</span>
        </div>
    );
};

export default IssueTag;
