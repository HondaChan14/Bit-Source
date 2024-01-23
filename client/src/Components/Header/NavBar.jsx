import { React } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GiFallingStar } from 'react-icons/gi';
import {
    SignedIn,
    SignInButton,
    SignUpButton,
    SignOutButton,
    useAuth,
} from '@clerk/clerk-react';

const NavBar = () => {
    const { sessionId } = useAuth();
    const location = useLocation();
    return (
        <header className='top-0 z-10 sticky hidden bg-background py-6 tablet:block tablet:w-full'>
            <nav className='grid items-center justify-between mx-auto px-3 tablet:grid-cols-2 tablet:mx-28 tablet:px-0 desktop:mx-80'>
                <Link to='/' className='flex items-center'>
                    <span className='flex uppercase self-center text-logo font-bold text-3xl tracking-wider'>
                        Bit Source{' '}
                        <GiFallingStar className='text-3xl self-center' />
                    </span>
                </Link>

                <div className='tablet:flex tablet:items-center tablet:pl-2 tablet:justify-end'>
                    <ul className='flex justify-between items-center text-xl gap-x-4'>
                        <li>
                            {!sessionId ? (
                                <SignInButton
                                    afterSignInUrl='/dashboard'
                                    className='font-bayon text-xl bg-primary hover:bg-accent text-text hover:text-background py-2 px-4 rounded'
                                />
                            ) : (
                                <SignOutButton
                                    signOutOptions={{ sessionId }}
                                    className='font-bayon text-xl bg-primary hover:bg-accent text-text hover:text-background py-2 px-4 rounded'
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
                                <Link
                                    to='/dashboard'
                                    className='font-bayon text-xl bg-primary hover:bg-accent text-text hover:text-background py-1 px-4 h-full rounded'
                                >
                                    Dashboard
                                </Link>
                            </li>
                            {location.pathname === '/dashboard' && (
                                <li>
                                    <Link
                                        to='/issues'
                                        className='font-bayon text-xl bg-primary hover:bg-accent text-text hover:text-background py-1 px-4 rounded'
                                    >
                                        Issue Board
                                    </Link>
                                </li>
                            )}
                        </SignedIn>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
