import { Link } from 'react-router-dom';
import './Branding.css';

function Branding() {
  // const [display, setDisplay] = useState('none')

  return (
    <div className='branding'>
        <h1 className='branding-title'>
        <Link className='branding-link' to='/'>Laura Lorbeer</Link>
        </h1>
        <div className='line darkblue'></div>
    </div>
  );
}

export default Branding;