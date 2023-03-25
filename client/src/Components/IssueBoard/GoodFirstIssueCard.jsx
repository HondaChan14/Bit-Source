import React from 'react';

const GoodFirstIssueCard = ({ issue }) => {
    return (
        <div className="rounded-2xl bg-gradient-to-r from-sky-400 to-blue-500 p-1 shadow-xl">
            <div className="block rounded-xl bg-rose-50 p-4 sm:p-6 lg:p-8">
                <h2 className="text-lg font-medium mb-2">{issue.title}</h2>
                <span>Created Date: {issue.created_at}</span>
                <div className="mt-2 border-t-2 border-gray-200">
                    <p className="text-gray-700 mt-2 mb-4 h-64">
                        Description: {issue.body}
                    </p>
                    <button
                        className="bg-slate-300 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => window.open(issue.html_url, '_blank')}
                    >
                        View on Github
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GoodFirstIssueCard;
