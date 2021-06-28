import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

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
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (

    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <i class="fab fa-xing"/>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
              </Link>
          </li>

          {/* <li>
            <Link
              to='/projects'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Projects
              </Link>
          </li> */}

          <li>
            <a href={process.env.PUBLIC_URL + "https://firebasestorage.googleapis.com/v0/b/shop-aa4f8.appspot.com/o/ParshvaShahResume.pdf?alt=media&token=82ebd7b6-713b-4ea1-b7ef-3f7e400a7199"} target="_blank" className='nav-links'>
              Resumé
            </a>

          </li>
          <li>
            <a href='https://www.instagram.com/parshvacodes' target="_blank"><button className="btn_connectIG">
              Lets Talk!
              </button></a>
          </li>
        </ul>
      </div>
    </nav>

  );
}

export default Navbar;