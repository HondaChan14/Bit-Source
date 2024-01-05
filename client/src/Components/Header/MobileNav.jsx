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
        <header className='sticky top-0 w-full bg-background py-6 block tablet:hidden z-10'>
            <nav className='container flex items-center justify-between mx-auto'>
                <div className='flex items-center'>
                    <a href='/' className='flex items-center ml-4'>
                        <span className='flex uppercase self-center text-logo font-bold text-3xl tracking-wider'>
                            Bit Source
                        </span>
                        <GiFallingStar className='text-3xl self-end text-logo font-bold' />
                    </a>
                </div>

                <button
                    className='flex items-center mr-20 text-2xl'
                    onClick={() => setShowMenu(!showMenu)}
                >
                    {showMenu ? <FaTimes /> : <FaBars />}
                </button>

                <ul
                    className={`grid grid-cols-3 gap-4 fixed bg-background w-full px-5 py-2 h-fit transition-all duration-200 ease-out transform ${
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
