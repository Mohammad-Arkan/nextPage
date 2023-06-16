import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
 
    return (
        <Link to={`/book/${book.isbn13}`}>
           <div className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
            <img src={book.image} alt="books image" className='object-cover w-full h-56 md:h-64 lg:h-80' />
                <div className='bg-black text-gray-300 bg-opacity-75 absolute inset-0 px-5 py-6 opacity-0 hover:opacity-100 translate-opacity duration-200 flex flex-col'>
                    <p>{book.title}</p><br />
                    <p>{book.subtitle.substring(0, 50)}...</p> <br />
                    <p className='mt-auto'> Price: {book.price}</p>
                    </div>
                </div>
        </Link>
      
        
    );
};

export default Book;