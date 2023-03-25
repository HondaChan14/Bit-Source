import React, { useEffect, useState } from 'react';
import NavBar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import IssueBoard from '../IssueBoard/IssueBoard';
import MobileNav from '../Header/MobileNav';

const LandingPage = () => {
    const [issues, setIssues] = useState([]);

    useEffect(() => {
        const fetchIssues = async () => {
            try {
                const response = await fetch('http://localhost:8000/');
                console.log(`resp`, response);
                const data = await response.json();
                console.log(`data`, data);
                setIssues(data);
            } catch (error) {
                console.error(`${error} is coming from LandingPage`);
            }
        };
        fetchIssues();
    }, []);

    return (
        <div className="bg-red-400 min-h-screen">
            <NavBar />
            <MobileNav />
            <IssueBoard issues={issues} />
            <Footer />
        </div>
    );
};

export default LandingPage;
