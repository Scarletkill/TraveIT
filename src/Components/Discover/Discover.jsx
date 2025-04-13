import React from 'react'
import './Discover.css'
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineHotel } from "react-icons/md";
import { TbTrekking } from "react-icons/tb";
import { IoCalendarOutline } from "react-icons/io5";
import { MdTour } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

import image1 from "../../Assests/Annapurna.jpg"
import image2 from "../../Assests/AnnapurnaNightView.jpg"
import image3 from "../../Assests/Everest.jpg"
import image4 from "../../Assests/landscape.jpg"
import image5 from "../../Assests/langtang.jpg"

const discover = [
  {
    id: 1,
    img: image1,
    name: 'Annapurna Base Camp route',
    location: 'Gaulagiri',
    rating: 4.7,
  },
  {
    id: 2,
    img: image2,
    name: 'Annapurna II Base Camp route',
    location: 'Gaulagiri',
    rating: 4.7,
  },
  {
    id: 3,
    img: image3,
    name: 'Everest Base Camp route',
    location: 'Gaulagiri',
    rating: 4.7,
  },
  {
    id: 4,
    img: image4,
    name: 'Mardi Himal trek route',
    location: 'Gaulagiri',
    rating: 4.7,
  },
  {
    id: 5,
    img: image5,
    name: 'Langtang trek route',
    location: 'Gaulagiri',
    rating: 4.7,
  }
]

const Discover = () => {
  return (
    <div className='discover section container'>
      <div className="secContainer">
        <div className=''>
          <span className="redText">Explore Now</span>
          <h3>Find your dream destination</h3>
          <p>Fill in the fields below to find the best spot for your next tour</p>
        </div>
        <div className='searchField grid'>
          <div className='inputField flex'>
            <IoCalendarOutline className='icon' />
            <input type='text' placeholder='Date'></input>
          </div>
          <div className='inputField flex'>
            <SlLocationPin className='icon' />
            <input type='text' placeholder='Location'></input>
          </div>
          <div className='inputField flex'>
            <MdOutlineHotel className='icon' />
            <input type='text' placeholder='Place to Stay'></input>
          </div>
          <div className='inputField flex'>
            <TbTrekking className='icon' />
            <input type='text' placeholder='Routes to Take'></input>
          </div>
          <div className='inputField flex'>
            <MdTour className='icon' />
            <input type='text' placeholder=' Tour Guide'></input>
          </div>

          <button className='Btn flex'>
            <CiSearch className='icon' />
            Search
          </button>
        </div>

        <div className='secMenu'>
          <ul className='flex'>
            <li className='Activity'>ALL</li>
            <li>Recomended</li>
            <li>Hotels</li>
            <li>Nature</li>
            <li>Lakes</li>
            <li>Mountain</li>

          </ul>
        </div>

        <div className="discoverContainer grid">
          {discover.map((destination) => {
            return (
              <div className="singleDestination" key={destination.id}>
                <div className="imgDiv">
                  <img src={destination.img} alt='Trek Destination' />
                  <div className="descInfo flex">
                    <div className='text'>
                      <span className='name'>
                        {destination.name}
                      </span>
                      <p className='flex'>
                        <IoLocationOutline className='icon' />
                        {destination.location}
                      </p>
                    </div>
                    <span className="rating">
                      {destination.rating}
                    </span>
                  </div>
                </div>
              </div>
            )
          })
          }
        </div>
      </div>
    </div>
  );
};

export default Discover;
