import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
    const [input, setInput] = useState('');
    console.log(input);

    return (
        <div className='flex w-1/2 mx-auto bg-white border-slate-500 border-4 rounded-3xl p-4 items-center content-center h-1 '>
            <FaSearch className='text-slate-500' />
            <input
                className='bg-transparent border-none w-full ml-2 focus:outline-none'
                value={input}
                placeholder='Search for an issue...'
                onChange={(e) => setInput(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;
