import React from 'react';
import "../styles/styles.css";
import { useNavigate } from 'react-router';

const Navbar = ({ data }) => {
  const navigate = useNavigate();
  const goTo = (event, param) => {
    console.log(param)
    navigate(`${param}`)
  }
  return (
    <div className='menu'>
      <p className='nav-head-1'>Social-media</p>
      <p className='nav-head'>{data}</p>
      <li className='menu-btn-container'>
        <ul className='menu-btn btn-1' onClick={event => goTo(event, '/')}>Home</ul>
        <ul className='menu-btn btn-2' onClick={event => goTo(event, '/savedContent')}>Saved-Content</ul>
        <ul className='menu-btn btn-3' onClick={event => goTo(event, '/about')}>About</ul>
      </li>
    </div>
  )
}

export default Navbar