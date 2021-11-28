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

        <div className='flex navigation-menu-topleft'>
          <Link className='navigation-link' to='/'>Home</Link>
          <Link className='navigation-link' to='/work'>Work</Link>
        </div>

        <div className='branding'>
          <h1 className='branding-title'>
            <Link className='branding-link' to='/'>Laura Lorbeer</Link>
          </h1>
          <div className='line darkblue'></div>
        </div>

        <div className='flex navigation-menu-topright'>
          <Link className='navigation-link' to='/about'>About</Link>
          <Link className='navigation-link' to='/contact'>Contact</Link>
        </div>
      
    </nav>
  );
}

export default Navigation;