import React from 'react';
import { BoltIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex items-center justify-between m-auto'>
          {/* logo section  */}

          <Link to="/" className='inline-flex items-center'>
          <BoltIcon className="h-6 w-6 text-blue-500" />
            <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>nextPage</span>
          </Link>
          {/* Nav items section */}
        </div>
    );
};

export default Header;