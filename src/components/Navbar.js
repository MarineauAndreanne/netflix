import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import "./Navbar.css"
import logo from "../images/logo.png"

const Navbar = () => {
  const [show, handleShow] = useState(false)

  const navigate = useNavigate()

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true)
    } else {
      handleShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar)
    return () => window.removeEventListener("scroll", transitionNavbar)
  }, [])

  return (
    <div className={`navbar ${show && "navbar__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => navigate("/")}
          className="nav__logo"
          src={logo}
          alt="logo"
        />
        <img
          onClick={() => navigate("./profile")}
          className="nav__avatar"
          src="https://i.pinimg.com/564x/b6/77/cd/b677cd1cde292f261166533d6fe75872.jpg"
          alt="avatar"
        />
      </div>
    </div>
  )
}

export default Navbar
