import React from 'react'
import NavBar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import IssueBoard from '../IssueBoard/IssueBoard';
import MobileNav from '../Header/MobileNav';

const LandingPage = () => {

  const issues = [
    { id: 1, title: 'First issue', description: 'This is the first issue.' },
    { id: 2, title: 'Second issue', description: 'This is the second issue.' },
    { id: 3, title: 'Third issue', description: 'This is the third issue.' },
    { id: 4, title: 'Fourth issue', description: 'This is the fourth issue.' },
    { id: 5, title: 'Fifth issue', description: 'This is the fifth issue.' },
    { id: 6, title: 'Sixth issue', description: 'This is the sixth issue.' },
  ];

  return (
    <div className="bg-red-400 min-h-screen">
      <NavBar />
      <MobileNav />
      <IssueBoard issues={issues}/>
      <Footer />
    </div>
  )
}

export default LandingPage