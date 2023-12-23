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
        <div className='bg-slate-800'>
            {loading ? (
                <LoadingSpinner />
            ) : error ? (
                <p className='text-white text-2xl font-bold animate-pulse'>
                    {console.log(`An error occurred: ${error.message}`)}
                    Oops! Something went wrong. Please refresh the page or try
                    again later.
                </p>
            ) : (
                <>
                    <LangTagsModal updateIssues={updateIssues} />
                    <IssueBoard issues={issues} />
                </>
            )}
        </div>
    );
};

export default LandingPage;
