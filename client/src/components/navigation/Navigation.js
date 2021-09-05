import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navigation.css';

function Navigation() {
  const [display, setDisplay] = useState('none')


  return (
    <div className="Navigation">
      <h1>
        <Link to='/'>Laura Lorbeer</Link>
      </h1>

      <nav>
        <div className='icon' onClick = {() => {
          if(display === 'block') setDisplay('none')
          if(display === 'none') setDisplay('block')
        }}>
          <i className="fa fa-bars"></i>
        </div>

        <div className='nav-links' style={{display: window.screen.width >= 600 ? 'flex' : display}}>
            <Link to='/work'>Work</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </div>
      </nav>
      

    </div>
  );
}

export default Navigation;