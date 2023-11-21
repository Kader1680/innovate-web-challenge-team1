import React from 'react'
import { Link } from 'react-router-dom'
import mark from "../pics/mark.jpg"
function About() {
  return (
    <div class= "about mt-4">
        <ul class="list-unstyled float-end">
            <li class="d-inline-block">About</li>
            <li class="d-inline-block ms-3">Upcoming Events</li>
            <li class="d-inline-block ms-3">Past Events</li>
            <li class="d-inline-block ms-3">Organizers</li>
            <li class="d-inline-block ms-3">Photos</li>
            <li class="d-inline-block ms-3">Video</li>
        </ul>
        <br></br>
        <div class="mt-4">
            <h2>About</h2>
            <p>GDSC USTO-MB stands for Google Developers Student Clubs of University of Science and Technology of Oran - Mohamed Boudiaf , we welcome all students from different backgrounds to join our chapter because our main goal is to create an impact and help all our members to learn new skills and get more familiar with all technologies not Google ones only in a peer to peer environement through Workshops and sessions  </p>
            <p>Expand your networking , gain new skills , find your peers and Join us !</p>
        </div>
        <div>
            <h2>Expand your networking , gain new skills , find your peers and Join us !</h2>
            <div class="border-1 border d-md-flex">
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
            </div>
        </div>
        
    </div>
  )
}

export default About