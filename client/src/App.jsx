import React from 'react';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import { SignedIn, SignedOut, SignIn, SignUp } from '@clerk/clerk-react';
import LandingPage from './pages/Home/LandingPage';
import Dashboard from './pages/Dashboard/Dashboard';
import NavBar from './Components/Header/NavBar';
import MobileNav from './Components/Header/MobileNav';
import Footer from './Components/Footer/Footer';
import { Toaster } from 'react-hot-toast';
import './index.css';

function ClerkProviderWithRoutes() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/issues' element={<LandingPage />} />
                <Route
                    path='/signin'
                    element={
                        <SignIn
                            routing='path'
                            path='/signin'
                            signUpUrl='/sign-up'
                            afterSignInUrl='/dashboard'
                        />
                    }
                />
                <Route
                    path='/sign-up'
                    element={
                        <SignUp
                            routing='path'
                            path='/sign-up'
                            afterSignUpUrl='/dashboard'
                        />
                    }
                />
                <Route
                    path='/dashboard'
                    element={
                        <>
                            <SignedIn>
                                <Dashboard />
                            </SignedIn>
                            <SignedOut>
                                <LandingPage />
                            </SignedOut>
                        </>
                    }
                />
            </Routes>
        </div>
    );
}

function App() {
    return (
        <div className='bg-background h-full'>
            <BrowserRouter>
                <NavBar />
                <MobileNav />
                <div className='grid mx-8'>
                    <Toaster position='bottom-right' />
                    <main>
                        <Outlet />
                        <ClerkProviderWithRoutes />
                    </main>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
