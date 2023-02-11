import { React } from 'react'
import { GiFallingStar } from "react-icons/gi";

const NavBar = () => {
  
  return (
    <header className='top-0 sticky hidden tablet:block bg-slate-800 text-white py-6'>
        <nav className='container flex items-center justify-between mx-auto'>
          <a href="http://" className='flex items-center'>
            <span className='flex uppercase self-center text-logo font-bold text-3xl tracking-wider'>
              Bit Source <GiFallingStar className='text-3xl self-center' />
            </span>
          </a>

            <div className='md:flex md:items-center'>
              <ul className='flex items-center text-xl'>
                <li className='mx-4'>
                <a href="#" className='text-white'>Log In</a>
                </li>
                <li className='mx-4'>
                  <a href="#" className='text-white'>Sign Up</a>
                </li>
              </ul>
            </div>
        </nav>
    </header>
  )
}

export default NavBar