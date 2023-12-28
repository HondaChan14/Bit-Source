import { React, useState } from 'react';
import { GiFallingStar } from 'react-icons/gi';
import { FaTimes, FaBars } from 'react-icons/fa';

const MobileNav = () => {
    let Links = [
        { name: 'LOG IN', link: '/signin', type: 'button' },
        { name: 'SIGN UP', link: '/signup', type: 'button' },
    ];

    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className='sticky top-0 w-full bg-background py-6 block tablet:hidden'>
            <nav className='container flex items-center justify-between mx-auto'>
                <div className='flex items-center'>
                    <a href='http://' className='flex items-center ml-4'>
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
                    className={`fixed bg-background w-full pl-9 transition-all duration-200 ease-out transform ${
                        showMenu
                            ? 'translate-y-20 opacity-100'
                            : 'translate-y-full opacity-0'
                    }`}
                >
                    {Links.map((Link) => {
                        return (
                            <li
                                key={Link.name}
                                className='text-xl font-semibold m-4'
                            >
                                {Link.type === 'button' && (
                                    <button onClick={Link.onClick}>
                                        {Link.name}
                                    </button>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
};

export default MobileNav;
