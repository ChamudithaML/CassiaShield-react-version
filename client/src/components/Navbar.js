import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  useEffect(
    () => {
      showButton();

      window.addEventListener('resize', showButton);

      return () => {
        window.removeEventListener('resize', showButton);
      };
    }, []
  )


  return (
    <nav className='navbar'>
      <div className='container-main'>

        <Link to="/" className='cassia-logo' onClick={closeMobileMenu}>
          CassiaShield <span style={{ color: 'transparent' }}>0</span><i className="fas fa-coffee"></i>
        </Link>

        <div className={click ? 'ul-menu active' : 'ul-menu'}>
          <div className='nav-front'>
            <Link to='/home' className='ul-links' onClick={closeMobileMenu}>
              Home
            </Link>
            <Link to='/image' className='ul-links' onClick={closeMobileMenu}>
              Upload Image
            </Link>
            <Link to='/live' className='ul-links' onClick={closeMobileMenu}>
              Real Time
            </Link>
          </div>

          {/* ---------------- */}

          <div className='nav-end'>
            <Link to='/login' className='ul-links' onClick={closeMobileMenu}>
              Log In
            </Link>
            <Link to='/signup' className='ul-links' onClick={closeMobileMenu}>
              Sign Up
            </Link>
          </div>

          {/* ---------------- */}

          <Link
            to='/sign-up'
            className='ul-links-mobile'
            onClick={closeMobileMenu}>
            Sign Up
          </Link>



        </div>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        {/* {button && <Button buttonStyle={'btn--outline'}>SIGN UP</Button>} */}
      </div>
    </nav>
  );
}

export default Navbar;
