import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import mark from "../pics/mark.jpg"
import { ThemeContext } from '../App';

function About() {
  const dark = useContext(ThemeContext)

  return (
    <div style={{ backgroundColor : dark ? "black" : "", color: dark ? "white" : "" }} class= "about mt-4">
        <ul class="list-unstyled float-end  text-dark  fw-bolder">
            <li style={{ backgroundColor : dark ? "black" : "", color: dark ? "white" : "" }} class="d-inline-block">About</li>
            <li style={{ backgroundColor : dark ? "black" : "", color: dark ? "white" : "" }}class="d-inline-block ms-3">Upcoming Events</li>
            <li style={{ backgroundColor : dark ? "black" : "", color: dark ? "white" : "" }}class="d-inline-block ms-3">Past Events</li>
            <li style={{ backgroundColor : dark ? "black" : "", color: dark ? "white" : "" }}class="d-inline-block ms-3">Organizers</li>
            <li style={{ backgroundColor : dark ? "black" : "", color: dark ? "white" : "" }}class="d-inline-block ms-3">Photos</li>
            <li style={{ backgroundColor : dark ? "black" : "", color: dark ? "white" : "" }}class="d-inline-block ms-3">Video</li>
        </ul>
        <br></br>
        <div style={{ backgroundColor : dark ? "black" : "white", color: dark ? "white" : "#62666d" }} class="mt-4">
            <h2 style={{ backgroundColor : dark ? "black" : "white", color: dark ? "white" : "black" }} >About</h2>
            <p style={{ backgroundColor : dark ? "black" : "white", color: dark ? "white" : "#62666d" }} >GDSC USTO-MB stands for Google Developers Student Clubs of University of Science and Technology of Oran - Mohamed Boudiaf , we welcome all students from different backgrounds to join our chapter because our main goal is to create an impact and help all our members to learn new skills and get more familiar with all technologies not Google ones only in a peer to peer environement through Workshops and sessions  </p>
            <p style={{ backgroundColor : dark ? "black" : "white", color: dark ? "white" : "#62666d" }} >Expand your networking , gain new skills , find your peers and Join us !</p>
        </div>
        <div>
            <h2 style={{ backgroundColor : dark ? "black" : "white", color: dark ? "white" : "black" }} >Expand your networking , gain new skills , find your peers and Join us !</h2>
            {/* <div class="border-1 border d-md-flex">
                <img style={{ borderRadius: "50%" }} width="150" height="150" src={mark} />
                <div class=" ms-md-">
                    <p>Nov 21, 2023 <span>Workshop / Study Group</span></p>
                    <h4>Marketing - session</h4>
                    <button class="border-1 bg-white text-primary">share</button>
                    <p>Unlock digital marketing expertise with Google Developer Student Club USTO-MB : Dive into strategies & tools to enhance your online impact.</p>
                    <div>
                        <Link>View details</Link>
                    </div>
                </div>
            </div> */}
            <h1 style={{ backgroundColor : dark ? "black" : "white", color: dark ? "white" : "black" }} >Upcoming events</h1>
            <p style={{ backgroundColor : dark ? "black" : "white", color: dark ? "white" : "black" }} >There are currently no upcoming events. Please check again soon.</p>
        </div>
        
    </div>
  )
}

export default About