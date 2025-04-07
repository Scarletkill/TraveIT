import React from 'react'
import './Home.css'
import Nepal from '../../Assests/Nepal.mp4';
import { AiOutlineSwapRight } from "react-icons/ai";

const Home = () => {
  return <div className='Home'>
    <div className="videoBg">
      <video src={Nepal} autoPlay loop muted></video>
    </div>
    <div className="sectionText">
      <h1>
        Unlock Your Travel Dreams with Us!
      </h1>
      <p>
        Discover the Nepal's most adventurous nature,
        life is so short for a
        trip.
      </p>
      <button className='Btn flex'>
        GET STARTED <AiOutlineSwapRight className='icon' />
      </button>
    </div>

    <div className="popularPlaces">
      <div className="content">
        <h3>Popular Places</h3>
        <div className='images Flex'>
          {/* <img src="" alt="" /> 
          <img src="" alt="" /> 
          <img src="" alt="" /> 
          <img src="" alt="" /> 
          <img src="" alt="" />  */}

        </div>
      </div>
    </div>
  </div>
};

export default Home
