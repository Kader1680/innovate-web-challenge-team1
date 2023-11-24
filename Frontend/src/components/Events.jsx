import React, { useContext } from 'react'
import {event} from "../eventData"
import { ThemeContext } from '../App'
function Events() {

   const dark =  useContext(ThemeContext)
  return (
    <div style={{ backgroundColor : dark ? "black" : "", color: dark ? "white" : "" }} >
        <h2 style={{  backgroundColor : dark ? "black" : "", color: dark ? "white" :"#29153d" }} >Past Event</h2>
        <div class="row">
        {
            event.map(i=>
                    <div  key={i.id} class= "text-center col-lg-3 col-xl-3 col-md-12 col-sm-12 mt-md-5">
                        <img style={{ borderRadius: "50%" }} width="150" src={i.img} />
                        <div class="squre text-center">
                            <p class=" mt-4">{i.date}</p>
                            <p class="fw-bolder" style={{ backgroundColor : dark ? "black" : "", color: dark ? "white" : "#29153d" }}>{i.type}</p>
                            <div style={{ fontSize:"17px", backgroundColor : dark ? "black" : "", color: dark ? "white" :  "rgb(95, 99, 104)" }} class="text-decoration-underline mt-2">{i.categrie}</div>
                            <div style={{ fontSize:"16px", backgroundColor : dark ? "black" : "", color: dark ? "white" :"rgb(95, 99, 104)" }} class="mt-2" >Université des Sciences et de la Technologie d'Oran - Mohamed Boudiaf USTOMB</div>
                        </div>
                    </div>
                )
        }
        </div>
        <div class="d-flex justify-content-center m-4 ">
            <button class="text-white fw-bolder bg-primary pe-3 ps-3 pt-2 pb-2 border-0 rounded-3">
                Load More
            </button>
        </div>
    </div>
  )
}

export default Events