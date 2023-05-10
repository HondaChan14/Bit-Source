import React, { useEffect, useState } from 'react';
import IssueBoard from '../../Components/IssueBoard/IssueBoard';

const LandingPage = () => {
    const [issues, setIssues] = useState([]);

    useEffect(() => {
        const fetchIssues = async () => {
            try {
                const response = await fetch(import.meta.env.RAILWAY_BIT_SOURCE_URL);
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
