import React, { useEffect, useState } from 'react';
import IssueBoard from '../../Components/IssueBoard/IssueBoard';
import LoadingSpinner from '../../Components/Loading/Loading';
import LangTagsModal from '../../Components/LangTagsModal/LangTagsModal';

const LandingPage = () => {
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const backendUrl = import.meta.env.VITE_BACK_END_URL;

    const updateIssues = (newIssues) => {
        setIssues(newIssues);
    };

    useEffect(() => {
        const fetchAndSetIssues = async () => {
            try {
                const response = await fetch(backendUrl);
                if (!response.ok) {
                    throw new Error(
                        `GitHub API request failed with status: ${response.status}`
                    );
                }
                const data = await response.json();
                setIssues(data);
                setLoading(false);
            } catch (error) {
                console.error('Error:', error); // Log the error for debugging
                setError(error);
                setLoading(false);
            }
        };
        fetchAndSetIssues();
    }, [backendUrl]);

    return (
        <div className='flex justify-center h-max'>
            {loading ? (
                <LoadingSpinner />
            ) : error ? (
                <p className='text-text text-2xl font-bold animate-pulse mx-4 mt-24'>
                    {console.log(`An error occurred: ${error.message}`)}
                    Oops! Something went wrong. Please refresh the page or try
                    again later.
                </p>
            ) : (
                <div className='flex-col'>
                    <LangTagsModal updateIssues={updateIssues} />
                    <IssueBoard issues={issues} />
                </div>
            )}
        </div>
    );
};

export default LandingPage;
