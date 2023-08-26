import React, { useEffect, useState } from 'react';
import IssueBoard from '../../Components/IssueBoard/IssueBoard';

const getBaseUrl = () => {
    if (process.env.NODE_ENV === 'development') {
        return 'http://localhost:8000';
    } else {
        return `https://${import.meta.env.VITE_BACK_END_URL}`;
    }
};

const fetchIssues = async () => {
    try {
        const baseUrl = getBaseUrl();
        const response = await fetch(baseUrl);

        if (!response.ok) {
            throw new Error(
                `Network response was not ok (${response.status} ${response.statusText})`
            );
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching issues: ${error}`);
    }
};
const LandingPage = () => {
    const [issues, setIssues] = useState([]);

    useEffect(() => {
        const fetchAndSetIssues = async () => {
            try {
                const data = await fetchIssues();
                setIssues(data);
            } catch (error) {
                throw error;
            }
        };
        fetchAndSetIssues();
    }, []);

    return (
        <div className='bg-red-400 min-h-screen'>
            <IssueBoard issues={issues} />
        </div>
    );
};

export default LandingPage;
