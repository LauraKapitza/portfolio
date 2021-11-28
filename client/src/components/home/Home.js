import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <div className='square brightblue square-back'></div>
      <div className='square darkblue square-front'>
        <div className='home-title'>
          <p className='home-textline'>Hi 👋</p>
          <p className='home-textline'>I'm Laura</p>
          <p className='home-textline'>Junior Web Developer</p>
        </div>
      </div>

      <div className='intro'>
        <p className='intro-textline'>Check my <Link to='/work' className='intro-link'>work</Link> to discover some of my projects.</p>
        <p className='intro-textline'>Find more <Link to='/about' className='intro-link'>about</Link> me and my motivation about programming.</p>
        <p className='intro-textline'>You can <Link to='/contact' className='intro-link'>contact</Link> me via a form or directly at mrslorbeer[at]gmail.com</p>
      </div>

    </div>
  );
}

export default Home;