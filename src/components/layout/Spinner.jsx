import React from 'react';
import spinner from './assests/Flowing gradient.gif'

const Spinner = () => {
    return (
        <div className='mt-20 w-100'>
            <img src={spinner} alt="Loading..." className='text-center mx-auto' />
        </div>
    );
};

export default Spinner;