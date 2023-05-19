import React, { useEffect, useState } from 'react';
import IssueBoard from '../../Components/IssueBoard/IssueBoard';

const LandingPage = () => {
    const [issues, setIssues] = useState([]);

    useEffect(() => {
        const fetchIssues = async () => {
            try {
                let baseUrl;
                if(process.env.NODE_ENV === 'development') {
                    // Use HTTP for local development
                    baseUrl = 'http://localhost:8000';
                } else {
                    // Use HTTPS for production or other environments
                    baseUrl = `https://${import.meta.env.VITE_BACK_END_URL}`;
                }
                const response = await fetch(baseUrl);
                const data = await response.json();
                setIssues(data);
            } catch (error) {
                console.error(`${error} is coming from LandingPage`);
            }
        };
        fetchIssues();
    }, []);

    return (
        <div className="bg-red-400 min-h-screen">
            <IssueBoard issues={issues} />
        </div>
    );
};

export default LandingPage;
