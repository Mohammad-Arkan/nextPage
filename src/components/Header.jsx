import React from 'react';
import { BoltIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
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
          <ul className='lg:flex lg:space-x-8 font-semibold'>
            <li><NavLink  to="/"> Home </NavLink></li>
            <li><NavLink  to="/books"> Books </NavLink></li>
            <li> <NavLink  to="/about"> About Us </NavLink></li>
          </ul>
          </div>
          </div>
           
         
     
         
          
        </div>
    );
};

export default Header;