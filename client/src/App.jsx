import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import LandingPage from './pages/Home/LandingPage';
import NavBar from './Components/Header/NavBar';
import MobileNav from './Components/Header/MobileNav';
import Footer from './Components/Footer/Footer';
import './index.css';
import SignUp from './pages/Signup/SignUp';
import Login from './pages/Login/Login';

function App() {
    return (
        <div className="bg-slate-800">
            <BrowserRouter>
                <NavBar />
                <MobileNav />
                <div>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
