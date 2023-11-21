import { Link } from "react-router-dom"
import {dataMemeber} from "../dataMember"
import React from 'react'

function Organizer() {
  return (
    <div>
        <h2>Past Event</h2>
        <div class="row">
        {
            dataMemeber.map(i=>
                    <div style={{ height: "20rem" }} class= "bg-denger text-center col-lg-3 col-xl-3 col-md-3 col-sm-12">
                        <img style={{ borderRadius: "50%" }} width="150" src={i.img} />
                        <p class="fw-bolder mt-4">{i.name}</p>
                        <p style={{ fontSize:"14px" }}>{i.position}</p>
                        <Link class="fw-bolder">View Profil</Link>
                    </div>
                )
        }
        </div>
        <h1 class="">Chapter Video</h1>

        <div class="d-flex justify-content-center m-3 ">
            <button class="text-white fw-bolder bg-primary pe-4 ps-4 pt-2 pb-2 border-0 rounded-3">
                Contact Us
            </button>
        </div>
    </div>
  )
}

export default Organizer