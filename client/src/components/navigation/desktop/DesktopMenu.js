import { Link } from 'react-router-dom';
import Branding from '../branding/Branding';
import './DesktopMenu.css';

function DesktopMenu() {
  // const [display, setDisplay] = useState('none')

  return (
    <nav className="desktop-menu">

        <div className='desktop-content-topleft'>
          <Link className='desktop-link' to='/'>Home</Link>
          <Link className='desktop-link' to='/work'>Work</Link>
        </div>

        <Branding />

        <div className='desktop-content-topright'>
          <Link className='desktop-link' to='/about'>About</Link>
          <Link className='desktop-link' to='/contact'>Contact</Link>
        </div>
      
    </nav>
  );
}

export default DesktopMenu;