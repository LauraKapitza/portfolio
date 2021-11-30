import { Link } from 'react-router-dom';
import Branding from '../branding/Branding';
import './MobileMenu.css';

function MobileMenu() {
  // const [display, setDisplay] = useState('none')

  return (
    <nav className="mobile-menu">

        <Branding />

        <div className='mobile-content'>
            <Link className='desktop-link' to='/'>Home</Link>
            <Link className='desktop-link' to='/work'>Work</Link>
            <Link className='desktop-link' to='/about'>About</Link>
            <Link className='desktop-link' to='/contact'>Contact</Link>
        </div>



        <div className='mobile-btn'>
          <p className='menu-header'>Menu</p>
        </div>
      
    </nav>
  );
}

export default MobileMenu;