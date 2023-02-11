import { React, useState } from 'react'
import { GiFallingStar } from "react-icons/gi";
import { FaTimes, FaBars } from "react-icons/fa";

const MobileNav = () => {

    let Links = [
        { name: "LOG IN", link: "landingPage", type: "button" },
        { name: "SIGN UP", link: "calendarPage", type: "button" },
    ];

    const [showMenu, setShowMenu ] = useState(false);

    return (
        <header className='sticky top-0 w-full bg-slate-800 text-white py-6 block tablet:hidden'>
            <nav className='container flex items-center justify-between mx-auto'>
            <div className='flex items-center'>
                <a href="http://" className='flex items-center'>
                    <span className='flex uppercase self-center text-logo font-bold text-3xl tracking-wider'>
                        Bit Source
                    </span>
                    <GiFallingStar className='text-3xl self-end text-logo font-bold' />
                </a>
                </div>
                
                <button 
                    className='flex items-center pr-20 text-2xl' 
                    onClick={() => setShowMenu(!showMenu)}
                >
                    {showMenu ? <FaTimes /> : <FaBars />}
                </button>
            

                <ul className={`absolute bg-slate-800 z-[-1] left-0 w-full pl-9 transition-all duration-200 ease-out transform ${
                    showMenu ? "block top-20" : "hidden"
                }`}>
                    {Links.map(Link => {
                        return (
                            <li key={Link.name} className="text-xl m-4 ">
                                {Link.type === "button" && (
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
    )
}

export default MobileNav