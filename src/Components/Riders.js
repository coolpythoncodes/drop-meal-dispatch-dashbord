import React from 'react';
import Search from './Search';
import '../Sass/Riders.scss';

const Riders = () => {
    return (
        <div className='riders'>
            <div className="riders__container">
                <Search />
            </div>
        </div>
    );
}

export default Riders;
