import React, { useContext } from 'react'
import logo from  "../pics/logo_dark_stacked_5giak2X.svg"
import { Link } from 'react-router-dom'
import power from "../pics/powered_by_bevy.svg"
import { ThemeContext } from '../App'
function Footer() {
  const dark = useContext(ThemeContext)
  return (
    <div>
      <div class="footer d-md-flex justify-content-between">
        <img src = {logo} />
        <div  >
            Quick Links
            <ul style={{ backgroundColor : dark ? "black" : "", color: dark ? "white" : "" }} className=' list-unstyled abs'>
                <li><Link style={{ backgroundColor : dark ? "black" : "", color: dark ? "white" : "" }} className=' text-decoration-none'>Chapters</Link></li>
                <li><Link style={{ backgroundColor : dark ? "black" : "", color: dark ? "white" : "" }}className='text-decoration-none'>About GDSC</Link></li>
                <li><Link style={{ backgroundColor : dark ? "black" : "", color: dark ? "white" : "" }}className=' text-decoration-none'>Upcoming events</Link></li>
                <li><Link style={{ backgroundColor : dark ? "black" : "", color: dark ? "white" : "" }}className=' text-decoration-none'>Lead Terms</Link></li>
                <li><Link style={{ backgroundColor : dark ? "black" : "", color: dark ? "white" : "" }} className='text-decoration-none'>Participation Terms</Link></li>
                <li><Link style={{ backgroundColor : dark ? "black" : "", color: dark ? "white" : "" }} className=' text-decoration-none'>Privacy</Link></li>
                <li><Link  style={{ backgroundColor : dark ? "black" : "", color: dark ? "white" : "" }} className='text-decoration-none'> Terms</Link></li>
            </ul>
        </div>
        <div style={{ backgroundColor : dark ? "black" : "", color: dark ? "white" : "" }} class="">
            <div style={{ backgroundColor : dark ? "black" : "", color: dark ? "white" : "" }}  >Social Media</div>
            <div>

            <i style={{ fontSize:"12px" }} class="fa-brands fa-x-twitter ms-2 "></i>
            <i style={{ fontSize:"12px" }} class="fa-brands fa-instagram ms-2"></i>
            <i style={{ fontSize:"12px" }} class="fa-brands fa-facebook  ms-2"></i>
            <i style={{ fontSize:"12px" }} class="fa-brands fa-linkedin-in ms-2"></i>
            <i style={{ fontSize:"12px" }} class="fa-brands fa-youtube ms-2"></i>
            </div>
        </div>
    </div>

        <div style={{ backgroundColor : dark ? "black" : "", color: dark ? "white" : "" }} class="text-dark d-flex align-items-center justify-content-between pt-2 pb-3">
          <div style={{  backgroundColor : dark ? "black" : "", color: dark ? "white" : "",  fontSize:"12px" }}  >© 2023 Google</div>
          <div style={{ backgroundColor : dark ? "black" : "", color: dark ? "white" : "", fontSize:"12px" }} >
            Powerded By
            <img  class="ms-2" src={power} />
          </div>
        </div>
    </div>
    
    
    
    
    
    
    
  )
}

export default Footer