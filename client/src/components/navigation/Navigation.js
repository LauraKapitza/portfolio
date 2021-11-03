import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navigation.css';

function Navigation() {
  // const [display, setDisplay] = useState('none')

  return (
    <nav className="Navigation">

        {/* <div className='icon' onClick = {() => {
          if(display === 'block') setDisplay('none')
          if(display === 'none') setDisplay('block')
        }}>
          <i className="fa fa-bars"></i>
        </div> */}

        <div className='flex menu-content-topleft'>
          <Link to='/'>Home</Link>
          <Link to='/work'>Work</Link>
        </div>

        <div className='header-logo'>
          <h1><Link to='/'>Laura Lorbeer</Link></h1>
          <div className='line darkblue'></div>
        </div>

        <div className='flex menu-content-topright'>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </div>
      
    </nav>
  );
}

export default Navigation;