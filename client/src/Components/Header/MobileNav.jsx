import { React, useState } from 'react';
import { GiFallingStar } from 'react-icons/gi';
import { FaTimes, FaBars } from 'react-icons/fa';
import {
    SignedIn,
    SignInButton,
    SignUpButton,
    SignOutButton,
    useAuth,
} from '@clerk/clerk-react';
import { Link, useLocation } from 'react-router-dom';

const MobileNav = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { sessionId } = useAuth();
    const location = useLocation();

    return (
        <header className='sticky top-0 bg-background py-6 block tablet:hidden z-10'>
            <nav className='grid grid-cols-4 gap-x-8 h-9 items-center justify-between mx-8'>
                <div className='flex col-span-3 items-center w-fit'>
                    <a
                        href='/'
                        className='flex items-center text-3xl text-logo font-bold'
                    >
                        <span className='tracking-wider'>BIT SOURCE</span>
                        <GiFallingStar className='place-self-end' />
                    </a>
                </div>

                <button
                    className='text-text text-4xl w-fit place-self-end self-center'
                    onClick={() => setShowMenu(!showMenu)}
                >
                    {showMenu ? <FaTimes /> : <FaBars />}
                </button>

                <ul
                    className={`flex w-11/12 gap-4 justify-center absolute bg-background px-5 py-2 transition-all duration-200 ease-out transform ${
                        showMenu
                            ? 'translate-y-16 opacity-100'
                            : 'translate-y-full opacity-0'
                    }`}
                    style={{ visibility: showMenu ? 'visible' : 'hidden' }}
                >
                    <li>
                        {!sessionId ? (
                            <SignInButton
                                afterSignInUrl='/dashboard'
                                className='font-bayon text-xl bg-primary hover:bg-accent text-text hover:text-background py-2 px-4 rounded'
                            />
                        ) : (
                            <SignOutButton
                                signOutOptions={{ sessionId }}
                                className='font-bayon text-xl w-full bg-primary hover:bg-accent text-text hover:text-background py-2 px-4 rounded'
                            />
                        )}
                    </li>
                    {!sessionId && (
                        <li>
                            <SignUpButton className='font-bayon text-xl bg-primary hover:bg-accent text-text hover:text-background py-2 px-4 rounded' />
                        </li>
                    )}
                    <SignedIn>
                        <li>
                            <Link to='/dashboard'>
                                <button className='font-bayon w-full text-xl bg-primary hover:bg-accent text-text hover:text-background py-2 px-4 rounded'>
                                    Dashboard
                                </button>
                            </Link>
                        </li>
                        {location.pathname === '/dashboard' && (
                            <li>
                                <Link to='/issues'>
                                    <button className='font-bayon w-full text-xl bg-primary hover:bg-accent text-text hover:text-background py-2 px-2 rounded'>
                                        Issue Board
                                    </button>
                                </Link>
                            </li>
                        )}
                    </SignedIn>
                </ul>
            </nav>
        </header>
    );
};

export default MobileNav;
