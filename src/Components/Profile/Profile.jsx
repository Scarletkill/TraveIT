import React from 'react'
import './Profile.css'

import icon from '../../Assests/icon.png'
import icon1 from '../../Assests/icon1.png'

const Profile = () => {
  return (
    <div className='portfolio section container'>
      <div className='secContainer grid'>
        <div className='leftContent'>
          <div className='secHeading'>
            <h3>Why Should You Choose Us</h3>
            <p>
              We have extensive knowledge and experience in the travel industry.
            </p>
          </div>
          <div  className='grid'>
            <div className='singlePortfolio flex'>
              <div className='iconDiv'>
                <img src={icon} alt='Icon image' sizes='20px'/>

              </div>
              <h4>We Care For You</h4>
              <p>
                Our Top priority is the safey and well-being. and we care about our cusomer and so on.,,,
              </p>

            </div>
            <div className='singlePortfolio flex'>
              <div className='iconDiv'>
                <img src={icon1} alt='Icon image'/>

              </div>
              <h4>Route We Travel</h4>
              <p>
                We travel with the most adventures and verified route with more delicacy and fun..
              </p>

            </div>


          </div>
        </div>

      </div>
    </div>
  )
}

export default Profile
