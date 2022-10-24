import React from 'react';
import "../styles/styles.css"

const Navbar = ({data}) => {
  return (
    <div className='Navbar-container'>
      <p className='nav-head-1'>Social-media</p>
      <p className='nav-head'>{data}</p>
    </div>
  )
}

export default Navbar