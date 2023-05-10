import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import LandingPage from './pages/Home/LandingPage';
import NavBar from './Components/Header/NavBar';
import MobileNav from './Components/Header/MobileNav';
import Footer from './Components/Footer/Footer';
import './index.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <MobileNav />
                <div className="pages">
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
