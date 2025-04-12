import React from 'react'
import "./Logo.css"
import { logo } from "../../assets"
import { Link } from 'react-router-dom'


const Logo = () => {
  return (
    <div className='logo'>
        <Link to="/" className="icon_container">
          <img src={logo} alt="" />
        </Link>
        <h1 className='title'>Mitsab Resources <span className='g-text'>Global Limited</span></h1>
    </div>
  )
}

export default Logo
