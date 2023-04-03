import React from 'react';
import IssueTag from './IssueTag';
import octoCat from '../../../public/images/octoface.svg';

const GoodFirstIssueCard = ({ issue }) => {
    const dateData = new Date(issue.created_at).toLocaleDateString();
    const usernameData =
        issue.user.login.split('')[0].toUpperCase() + issue.user.login.slice(1);
    const issueTitleData =
        issue.title.split('')[0].toUpperCase() + issue.title.slice(1);
    const labelData = issue.labels.map((label) => {
        return label.name.split('')[0].toUpperCase() + label.name.slice(1);
    });
    const userProfile = issue.user.html_url;

    return (
        <div className="rounded-2xl bg-gradient-to-r from-sky-400 to-blue-500 p-1 shadow-xl hover:shadow-2xl transition duration-500 transform hover:-traslate-y-1 hover:scale-105">
            <div className="block rounded-xl bg-[#0d1117] hover:bg-[#516A8F] p-4 sm:p-6 lg:p-8 h-80">
                <h2 className="text-xl text-white mb-2 h-20 font-bayon font ">
                    {issueTitleData}
                </h2>
                <div className="flex justify-between">
                    <div>
                        <span className="text-white font-medium">
                            Created: {dateData}
                        </span>
                    </div>

                    <div className="flex space-x-2 ">
                        <img
                            className="w-6"
                            src={octoCat}
                            alt="octo cat face icon"
                        />
                        <a
                            href={userProfile}
                            className=" text-white font-medium"
                        >
                            {usernameData}
                        </a>
                    </div>
                </div>

                <div className="flex flex-wrap py-4">
                    {labelData.map((label) => (
                        <IssueTag key={label} issueTag={label} />
                    ))}
                </div>
                <div className="absolute bottom-4 rounded-md border-2 border-white-800">
                    <button
                        className="font-bayon text-xl bg-blue-600 hover:bg-slate-700 text-white py-2 px-4 rounded"
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
