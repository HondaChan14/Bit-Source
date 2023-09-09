import React, { useEffect, useState } from 'react';
import IssueBoard from '../../Components/IssueBoard/IssueBoard';
import LoadingSpinner from '../../Components/Loading/Loading';

const getBaseUrl = () => {
    if (import.meta.env.DEV) {
        return 'http://localhost:8000';
    }
    return `https://${import.meta.env.VITE_BACK_END_URL}`;
};

const LandingPage = () => {
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const baseUrl = getBaseUrl();

    const updateIssues = async (newIssues) => {
        try {
            const response = await fetch(baseUrl);

            if (!response.ok) {
                throw new Error(
                    `GitHub API request failed with status: ${response.status}`
                );
            }

            const data = await response.json();
            const temp = [];
            for (let key in data) {
                temp.push(data[key]);
            }
            setIssues(temp);
            setLoading(false);
        } catch (error) {
            console.error('Error:', error); // Log the error for debugging
            setError(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchAndSetIssues = async () => {
            try {
                const response = await fetch(baseUrl);
                if (!response.ok) {
                    throw new Error(
                        `GitHub API request failed with status: ${response.status}`
                    );
                }
                const data = await response.json();
                const temp = [];
                console.log(data['items']);
                for (let key in data.items) {
                    temp.push(data.items[key]);
                }
                setIssues(temp);

                setLoading(false);
            } catch (error) {
                console.error('Error:', error); // Log the error for debugging
                setError(error);
                setLoading(false);
            }
        };
        fetchAndSetIssues();
    }, [baseUrl]);

    return (
        <div className='bg-slate-800 min-h-screen'>
            {loading ? (
                <LoadingSpinner />
            ) : error ? (
                <p>An error occurred: {error.message}</p>
            ) : (
                <IssueBoard issues={issues} updateIssues={updateIssues} />
            )}
        </div>
    );
};

export default LandingPage;
