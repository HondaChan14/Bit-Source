import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import IssueTag from './IssueTag';
import octoCat from '/src/images/octoface.svg';
import toast from 'react-hot-toast';

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const truncateTitle = (string) => {
    return string.length > 70 ? string.slice(0, 70) + '...' : string;
};

const GoodFirstIssueCard = ({ issue }) => {
    const { created_at, user, title, labels } = issue;
    const dateData = new Date(created_at).toLocaleDateString();
    const usernameData = capitalizeFirstLetter(user.login);
    const issueTitleData = truncateTitle(capitalizeFirstLetter(title));
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
            <div className='block rounded-xl bg-background dark:bg-background hover:bg-blue-100 p-4 laptop:p-6 desktop:p-8 h-80'>
                <h2 className='text-xl text-text mb-2 h-20 font-bayon'>
                    {issueTitleData}
                </h2>
                <div className='flex justify-between'>
                    <div>
                        <span className='text-text font-medium'>
                            Created: {dateData}
                        </span>
                    </div>

                    <div className='flex flex-wrap flex-col justify-center text-center items-center'>
                        <img
                            className='w-10 h-10 rounded-lg'
                            src={userProfileImage || octoCat}
                            alt='octo cat face icon'
                        />
                        <a
                            href={userProfile}
                            className=' text-text font-medium'
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
                        className='text-text text-3xl font-bold hover:text-yellow-400'
                    >
                        {isStarred ? <AiFillStar /> : <AiOutlineStar />}
                    </button>
                </div>
                <div className='absolute bottom-4 rounded-md border-2 border-primary'>
                    <button
                        className='font-bayon text-xl bg-background hover:bg-accent text-text hover:text-background py-2 px-4 rounded'
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
