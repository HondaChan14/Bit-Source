import React from 'react'
import NavBar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import IssueBoard from '../IssueBoard/IssueBoard';
import MobileNav from '../Header/MobileNav';

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <MobileNav />
      <IssueBoard />
      <Footer />
    </div>
  )
}

export default LandingPage