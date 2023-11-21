import React from 'react'
import logo from  "../pics/logo_dark_stacked_5giak2X.svg"
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div class="footer d-md-flex justify-content-between">
        <img src = {logo} />
        <div>
            Quick Links
            <ul>
                <li><Link >Chapters</Link></li>
                <li><Link>About GDSC</Link></li>
                <li><Link>Upcoming events</Link></li>
                <li><Link>Lead Terms</Link></li>
                <li><Link>Participation Terms</Link></li>
                <li><Link>Privacy</Link></li>
                <li><Link>Terms</Link></li>
            </ul>
        </div>
        <div class="d-flex">
        <i style={{ fontSize:"25px" }} class="fa-brands fa-x-twitter ms-2 "></i>
        <i style={{ fontSize:"25px" }} class="fa-brands fa-instagram ms-2"></i>

            <i style={{ fontSize:"25px" }} class="fa-brands fa-facebook"></i>
            <i style={{ fontSize:"25px" }} class="fa-brands fa-linkedin-in ms-2"></i>
        </div>
    </div>
    
    
    
    
    
    
    
  )
}

export default Footer