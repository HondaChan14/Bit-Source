import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import IssueTag from './IssueTag';
import octoCat from '/src/images/octoface.svg';
import toast from 'react-hot-toast';

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const GoodFirstIssueCard = ({ issue }) => {
    const { created_at, user, title, labels } = issue;
    const dateData = new Date(created_at).toLocaleDateString();
    const usernameData = capitalizeFirstLetter(user.login);
    const issueTitleData = capitalizeFirstLetter(title);
    const labelData = labels.map((label) => capitalizeFirstLetter(label.name));

    const userProfile = user.html_url;
    const userProfileImage = user.avatar_url;

    const notify = () =>
        toast.promise(
            Promise.resolve(isStarred), // Use Promise.resolve to mimic a promise-based value
            {
                loading: 'Saving...',
                success: isStarred ? <b>Unstarred! ❌</b> : <b>Starred! ✨</b>,
                error: 'Something went wrong with saving! 😭',
            }
        );

    const [isStarred, setIsStarred] = React.useState(false);

    const handleStarClick = () => {
        setIsStarred(!isStarred);
    };

    return (
        <div className='rounded-2xl bg-gradient-to-r from-sky-400 to-blue-500 p-1 shadow-xl hover:shadow-2xl transition duration-500 transform hover:-traslate-y-1 hover:scale-105'>
            <div className='block rounded-xl bg-[#0d1117] hover:bg-[#516A8F] p-4 sm:p-6 lg:p-8 h-80'>
                <h2 className='text-xl text-white mb-2 h-20 font-bayon font '>
                    {issueTitleData}
                </h2>
                <div className='flex justify-between'>
                    <div>
                        <span className='text-white font-medium'>
                            Created: {dateData}
                        </span>
                    </div>

                    <div className='flex space-x-2 '>
                        <img
                            className='w-10 h-10 rounded-lg'
                            src={userProfileImage || octoCat}
                            alt='octo cat face icon'
                        />
                        <a
                            href={userProfile}
                            className=' text-white font-medium'
                        >
                            {usernameData}
                        </a>
                    </div>
                </div>

                <div className='flex flex-wrap py-4'>
                    {labelData.map((label) => (
                        <IssueTag key={label} issueTag={label} />
                    ))}
                </div>
                <div className='absolute right-8 bottom-4'>
                    <button
                        onClick={() => {
                            notify();
                            handleStarClick();
                        }}
                        className='text-white text-3xl font-bold'
                    >
                        {isStarred ? <AiFillStar /> : <AiOutlineStar />}
                    </button>
                </div>
                <div className='absolute bottom-4 rounded-md border-2 border-white-800'>
                    <button
                        className='font-bayon text-xl bg-blue-600 hover:bg-slate-700 text-white py-2 px-4 rounded'
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
