import React, { useState } from 'react'
import logo from  "../pics/logo_dark_horizontal_097s7oa.svg"
import { Link } from 'react-router-dom'

function Navbar() {
   

  const [search, setsearch] = useState(false);
  const displaySearch = () => {
    setsearch(true)
  }
  const siddenSearch = () => {
    setsearch(false)
  }

  return (
    <div class="navbar d-lg-flex border-bottom align-items-center justify-content-between position-relative">
        <div>
        <img src={logo} />
        </div>
        <div class="me-lg-3">
            <ul class=" list-unstyled mt-lg-2">
                <li class="d-inline-block">
                    <Link class="text-decoration-none">About GDSC</Link>
                </li>
                <li class="d-inline-block ms-3">
                    <Link class="text-decoration-none">Chapters</Link>
                </li>
                <li class="d-inline-block ms-3">
                    <Link class="text-decoration-none">Upcoming events</Link>
                </li>
                <li onClick={displaySearch} class="d-inline-block ms-3">    <i style={{ fontSize: "16px" }} class="fa-solid fa-magnifying-glass"></i></li>
                <li class="d-inline-block ms-3">
                    <Link class="text-decoration-none">profil</Link>
                </li>
                
            </ul>
        </div>

        <div style={{ marginTop: "3.8rem", color: "#62666d", border: "1px solid" }} class={`searchBox position-absolute bg-white  border-1 w-100 p-3 ${search ? "d-block" : "d-none"} `}>
            <i style={{ fontSize: "16px" }} class="fa-solid fa-magnifying-glass"></i>
            <input placeholder='Search Here...' class= "ms-2 border-0 outline-none ps-1 bg-transparent"/>
            <i onClick={siddenSearch} style={{ fontSize: "16px" }} class="mt-1 fa-solid fa-x float-end"></i>
        </div>
    </div>
  )
}

export default Navbar