import React, { useState } from 'react';
import './Navbar.css';
import { IoLogoTumblr } from 'react-icons/io';
import { PiDotsNineDuotone } from 'react-icons/pi';
import { AiFillCloseCircle } from 'react-icons/ai';
import Signin from '../../Form/signin';

const Navbar = () => {
  //state to track and update Navbar
  const [navBar, setNavBar] = useState('menu');
  //function to show navbar
  const showNavBar = () => {
    setNavBar('menu showNavbar')
  };

  const hideNavBar = () => {
    setNavBar('menu');
  }

  const[open,setOpen] = useState(false)

  const options=["Travel's discover", "Travel's choice"]
  return (
    <div className='navBar'>
      <div className='logoDiv'>
        <IoLogoTumblr className="icon" />
        <span>TRAVIT</span>
      </div>
      <div className={navBar}>
        <ul>
          <li className='navList'>Discover
            {/* <button onClick={()=>setOpen(!open)}>Discover </button>
            {open && (<div>
              <button className='block hover:bg-gray-100'>Travels Profile</button>
              <button className='block hover:bg-gray-100'>Travels' Choice</button>
            </div>)} */}
          </li>
          <li className='navList'>
            Trip
          </li>
          <li className='navList'>
            Review
          </li>
          <li className='navList'>
            Profile
          </li>
        </ul>

        {/* Icon to remove Navbar */}
        <AiFillCloseCircle className='closeIcon' onClick={hideNavBar} />
      </div>
      <Signin />
      {/* <button className="SignInBtn Btn">Sign In</button> */}
      {/* Icon nto toggle Navbar */}
      <PiDotsNineDuotone className='menuIcon' onClick={showNavBar} />
    </div>
  );
};

export default Navbar;
