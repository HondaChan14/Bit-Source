import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import React from 'react';
import LandingPage from './pages/Home/LandingPage';
import NavBar from './Components/Header/NavBar';
import MobileNav from './Components/Header/MobileNav';
import Footer from './Components/Footer/Footer';
import toast, { Toaster } from 'react-hot-toast';
// import ClerkProviderWithRoutes from './Components/Clerk/ClerkProviderWithRoutes';

import './index.css';
import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    RedirectToSignIn,
    SignIn,
    SignUp,
} from '@clerk/clerk-react';

if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
    throw new Error('Missing Publishable Key');
}
const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

function ClerkProviderWithRoutes() {
    const navigate = useNavigate();

    return (
        <div className='flex justify-center items-center'>
            <Toaster position='bottom-right' />
            <ClerkProvider
                publishableKey={clerkPubKey}
                navigate={(to) => navigate(to)}
            >
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                    <Route
                        path='/signin'
                        element={<SignIn routing='path' path='/signin' />}
                    />
                    <Route
                        path='/signup'
                        element={<SignUp routing='path' path='/signup' />}
                    />
                    <Route
                        path='/dashboard'
                        element={
                            <>
                                <SignedIn>
                                    <LandingPage />
                                </SignedIn>
                                <SignedOut>
                                    <RedirectToSignIn />
                                </SignedOut>
                            </>
                        }
                    />
                </Routes>
            </ClerkProvider>
        </div>
    );
}
function App() {
    return (
        <div className='bg-slate-800 h-screen'>
            <BrowserRouter>
                <NavBar />
                <MobileNav />
                {/* <Routes>
                        <Route path='/' element={<LandingPage />} />
                        <Route path='/signup' element={<SignUp />} />
                        <Route path='/login' element={<Login />} />
                    </Routes> */}
                <ClerkProviderWithRoutes />
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
