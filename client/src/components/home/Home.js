import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <div className='square brightblue'></div>
      <div className='square darkblue square-front'>
        <p>Hi 👋</p>
        <p>I'm Laura</p>
        <p>Junior Web Developer</p>
      </div>

      <div id='introduction'>
        <p>Check my <Link to='/work'>work</Link> to discover some of my projects.</p>
        <p>Find more <Link to='/about'>about</Link> me and my motivation about programming.</p>
        <p>You can <Link to='/contact'>contact</Link> me via a form or directly at mrslorbeer[at]gmail.com</p>
      </div>

    </div>
  );
}

export default Home;