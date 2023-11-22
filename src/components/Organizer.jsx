import { Link } from "react-router-dom"
import {dataMemeber} from "../dataMember"
import React from 'react'

function Organizer() {
  return (
    <div class="organier">
        <h2 className="mt-5 mb-5 fs-1" style={{ color:"#29153d" }}>Organizers</h2>
        <div class="row">
        {
            dataMemeber.map(i=>
                    <div key={i.id} style={{ height: "20rem" }} class= "bg-denger text-center col-lg-3 col-xl-3 col-md-12 col-sm-12">
                        <img style={{ borderRadius: "50%" }} width="150" src={i.img} />
                        <div class="fw-bolder mt-4">{i.name}</div>
                        <div style={{ fontSize:"16px", color:"rgb(95, 99, 104)" }}>{i.position}</div>
                        <div class="mt-4"><Link class="fw-bolder ">View Profil</Link></div>
                    </div>
                )
        }
        </div>
        <h1 style={{ color:"#29153d", margin:"3rem 0" }} >Chapter Video</h1>

        <div class="d-flex justify-content-center m-3 ">
            <button class="text-white fw-bolder bg-primary pe-4 ps-4 pt-2 pb-2 border-0 rounded-3">
                Contact Us
            </button>
        </div>
        
    </div>
  )
}

export default Organizer