import React from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router';

const About = () => {
    const navigate = useNavigate();
    const goTo = (event, param) => {
        console.log(param)
        navigate(`${param}`)
    }
    return (
        <div>
            <Navbar data={'About'} />
            <div className='side-menu'>
                <table className='side-menu-table'>
                    <tr>
                        <td onClick={event => goTo(event, '/')} className='side-menu-table-row'>Home</td>
                    </tr>
                    <tr>
                        <td onClick={event => goTo(event, '/savedContent')} className='side-menu-table-row'>Saved Content</td>
                    </tr>
                    <tr>
                        <td onClick={event => goTo(event, '/about')} className='side-menu-table-row'>About</td>
                    </tr>
                </table>
            <p className='about-content'>Made by Mohtasheem Ejaz...</p>
            </div>
        </div>
    )
}

export default About