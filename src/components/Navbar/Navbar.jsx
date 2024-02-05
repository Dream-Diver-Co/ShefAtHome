import React, { useEffect, useState } from 'react';

import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faAddressCard, faBars, faAward, faAddressBook, faKitchenSet } from '@fortawesome/free-solid-svg-icons';
import { GiHamburgerMenu } from "react-icons/gi"
import { MdOutlineRestaurantMenu } from "react-icons/md"
import images from "../../constants/images";
import ReactCardFlip from 'react-card-flip';
import { Link } from 'react-router-dom';
import Megamenu from "../Megamenu/Megamenu";


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const flipTimes = {
    home: 5000,
    about: 3000,
    menu: 6000,
    awards: 4000,
    contact: 7000,
  };

  const flipIcon = () => {
    setIsFlipped(!isFlipped);

    
  };

  useEffect(() => {
    const intervalId = setInterval(flipIcon, 5000);
    return () => clearInterval(intervalId);
  }, [isFlipped]);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.foodymoody} alt="app__logo" />
        
      </div>

      <ul className="app__navbar-links">
        <ReactCardFlip flipDirection='vertical' isFlipped={isFlipped} flipSpeedBackToFront={1} flipSpeedFrontToBack={2}>
          <div className='front'>
        <li className="p__opensans"><a href="#home"><FontAwesomeIcon icon={faHouse} style={{ fontSize: '2em' }} /></a></li>
        </div>
        <div className='Back'>
          <h1>Home</h1></div>
        </ReactCardFlip>

        <ReactCardFlip flipDirection='vertical' isFlipped={isFlipped} flipSpeedBackToFront={3} flipSpeedFrontToBack={4}>
          <div className='front'>
        <li className="p__opensans"><a href="#about"><FontAwesomeIcon icon={faAddressCard} style={{ fontSize: '2em' }} /></a></li>
        </div>
        <div className='front Back'>
          <h1>About Us</h1></div>
        </ReactCardFlip>

        <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped} flipSpeedBackToFront={3} flipSpeedFrontToBack={1}>
          <div className='front'>
        <li className="p__opensans"><a href="#menu"><FontAwesomeIcon icon={faBars} style={{ fontSize: '2em' }} /></a></li>
        </div>
        <div className='front Back'>
          <h1>Menu</h1></div>
        </ReactCardFlip>
        
        <ReactCardFlip flipDirection='vertical' isFlipped={isFlipped} flipSpeedBackToFront={5} flipSpeedFrontToBack={3}>
          <div className='front'>
        <li className="p__opensans"><a href="#awards"><FontAwesomeIcon icon={faAward} style={{ fontSize: '2em' }} /></a></li>
        </div>
        <div className='front Back'>
          <h1>Awards</h1></div>
        </ReactCardFlip>
        
        <ReactCardFlip flipDirection='vertical' isFlipped={isFlipped} flipSpeedBackToFront={1} flipSpeedFrontToBack={2}>
          <div className='front'>
        <li className="p__opensans"><a href="#contact"><FontAwesomeIcon icon={faAddressBook} style={{ fontSize: '2em' }} /></a></li>
        </div>
        <div className='front Back'>
          <h1>Contact</h1></div>
        </ReactCardFlip>
        <Link to='/shef'>
        <ReactCardFlip flipDirection='vertical' isFlipped={isFlipped} flipSpeedBackToFront={4} flipSpeedFrontToBack={5}>
        <div className='front'>
        <li className="p__opensans"><a href="#contact"><FontAwesomeIcon icon={faKitchenSet} style={{ fontSize: '2em' }} /></a></li>
        </div>
        <div className='front Back'>
        <h1>Shef</h1>
        <Megamenu />
        </div>
        </ReactCardFlip>
        </Link>
      </ul>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true) } />
        {toggleMenu && (
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() =>setToggleMenu(false)} />
          <ul className="app__navbar-smallscreen_links">
            <li className="p__opensans"><a href="#home">Home</a></li>
            <li className="p__opensans"><a href="#about">About</a></li>
            <li className="p__opensans"><a href="#menu">Menu</a></li>
            <li className="p__opensans"><a href="#awards">Awards</a></li>
            <li className="p__opensans"><a href="#contact">Contacts</a></li>
          </ul>
        </div>
        )}
      </div>
    </nav>
  );
}
export default Navbar;
