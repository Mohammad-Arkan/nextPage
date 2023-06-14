import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
    BoltIcon,
    Bars3BottomRightIcon,
    XMarkIcon,
  } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='mx-9'>
            {/* header-section */}
          <div className='lg:flex justify-between py-5 px-8 bg-gray-100' >
          <div className=''>
             {/* logo section  */}
                <Link to="/" className='inline-flex items-center'>
                <BoltIcon className="h-6 w-6 text-blue-500" />
                <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 mb-1'>nextPage</span>
                </Link>
            </div>
            <div>
                     {/* Nav items section */}
          <ul className={`lg:flex absolute ${open? 'top-6':'-top-96'}`}>
            <li><NavLink  to="/"> Home </NavLink></li>
            <li><NavLink  to="/books"> Books </NavLink></li>
            <li> <NavLink  to="/about"> About Us </NavLink></li>
          </ul>
          {/* Mobile Navbar section */}
          <div className='lg:hidden'>
            <button onClick={()=> setOpen(!open)}>
            <span>
            {
            open === true ?
             <XMarkIcon className='w-5 text-gray-600' /> 
             :<Bars3BottomRightIcon className='w-5 text-gray-600' />
             }
             </span>
            </button>
          </div>
          </div>
          </div>
           
         
     
         
          
        </div>
    );
};

export default Header;