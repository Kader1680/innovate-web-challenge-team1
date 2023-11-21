import React from 'react'
import gdsc from "../pics/gdscFbCover.jpg"
function header() {
  return (
    <div class="header mt-3">
        <img class="rounded-3" style={{ width:"100%" }} src = {gdsc} />
        <h2 class="fw-bolder mt-4 mb-4">Université des Sciences et de la Technologie d'Oran - Mohamed Boudiaf USTOMB</h2>
        <p>413 Group Members</p>
        <div class="d-flex">
            <i style={{ fontSize:"25px" }} class="fa-brands fa-facebook"></i>
            <i style={{ fontSize:"25px" }} class="fa-brands fa-x-twitter ms-2 "></i>
            <i style={{ fontSize:"25px" }} class="fa-brands fa-linkedin-in ms-2"></i>
            <i style={{ fontSize:"25px" }} class="fa-brands fa-instagram ms-2"></i>
            <i style={{ fontSize:"25px" }}  class="fa-regular fa-envelope ms-2"></i>
        </div>
        <div class="d-flex justify-content-center m-3 ">
            <button class="text-white fw-bolder bg-primary pe-4 ps-4 pt-2 pb-2 border-0 rounded-3">
                Joined
            </button>
        </div>
    </div>
  )
}

export default header