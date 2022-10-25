import React from 'react';
import Navbar from './Navbar';

const About = () => {
    return (
        <div>
            <Navbar data={'About'} />
            
            <p className='about-content'>Made by Mohtasheem Ejaz...</p>
        </div>
    )
}

export default About