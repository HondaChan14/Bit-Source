import { React } from 'react';
import { Link } from 'react-router-dom';
import { GiFallingStar } from 'react-icons/gi';

const NavBar = () => {
    return (
        <header className='top-0 z-10 sticky hidden tablet:block bg-background py-6'>
            <nav className='container flex items-center justify-between mx-auto'>
                <Link to='/' className='flex items-center'>
                    <span className='flex uppercase self-center text-logo font-bold text-3xl tracking-wider'>
                        Bit Source{' '}
                        <GiFallingStar className='text-3xl self-center' />
                    </span>
                </Link>

                <div className='md:flex md:items-center'>
                    <ul className='flex items-center text-xl'>
                        <li className='mx-4'>
                            <Link
                                to='/signin'
                                className='text-text font-semibold'
                            >
                                Log In
                            </Link>
                        </li>
                        <li className='mx-4'>
                            <Link
                                to='/signup'
                                className='text-text font-semibold'
                            >
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
