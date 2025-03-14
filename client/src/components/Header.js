import React from 'react';
import {NavLink} from 'react-router';

export default Header  = () => {
  return (
    <div>
      <NavLink to='/' end>Home</NavLink>
      <NavLink to='/About' end>About</NavLink>
      <NavLink to='/Resume' end>Resume</NavLink>
      <NavLink to='/Contact' end>Contact</NavLink>
      <NavLink to='/Blogs' end>Blogs</NavLink>
    </div>
  )
}