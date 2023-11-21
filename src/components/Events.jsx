import React from 'react'
import {event} from "../eventData"
function Events() {
  return (
    <div>
        <h2>Past Event</h2>
        <div class="row">
        {
            event.map(i=>
                    <div class= "text-center col-lg-3 col-xl-3 col-md-3 col-sm-12">
                        <img style={{ borderRadius: "50%" }} width="150" src={i.img} />
                        <p>{i.date}</p>
                        <p>{i.type}</p>
                        <p>{i.categrie}</p>
                    </div>
                )
        }
        </div>
        <div class="d-flex justify-content-center m-3 ">
            <button class="text-white fw-bolder bg-primary pe-4 ps-4 pt-2 pb-2 border-0 rounded-3">
                Joined
            </button>
        </div>
    </div>
  )
}

export default Events