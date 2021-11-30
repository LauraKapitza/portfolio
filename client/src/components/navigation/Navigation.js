import { useState, useEffect } from 'react';
import DesktopMenu from './desktop/DesktopMenu';
import MobileMenu from './mobile/MobileMenu';
import './Navigation.css';

function Navigation() {
  const [width, setWidth] = useState(window.innerWidth)
  const [mobile, setMobile] = useState(null)
  
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
      
      if (width <= 699) {
        setMobile(true)
      } else {
        setMobile(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })


  return(
    <header className="Navigation">
      {mobile && <MobileMenu />}
      {!mobile && <DesktopMenu />}
    </header>
  )
}

export default Navigation;