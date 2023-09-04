import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
export default function SideNavBar() {
  return (
    <div className='sideNavBar'>
        <ul className='navBarLink'>
            <li><Link className='linkNav' to="/">Home</Link></li>
            <li><Link className='linkNav' to="/addDevice">Add Device</Link></li>
        </ul>
    </div>
  )
}
