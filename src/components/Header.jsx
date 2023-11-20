import React from 'react'
import gdsc from "../pics/gdscFbCover.jpg"
function header() {
  return (
    <div class="header mt-3">
        <img class="rounded-3" style={{ width:"100%" }} src = {gdsc} />
        <h2 class="fw-bolder mt-4 mb-4">Université des Sciences et de la Technologie d'Oran - Mohamed Boudiaf USTOMB</h2>
        <p>413 Group Members</p>
    </div>
  )
}

export default header