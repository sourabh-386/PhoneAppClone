import React from 'react'
import './Footer.css'
import logo from '../../images/logo.jpg'


const Footer = () => {
  return (
    <div>

      <div className="footer">
        <div>
        <p><i class="bi bi-house-door-fill"></i></p>
        <p>Home</p>
        </div>
        <div>
        <p><i class="bi bi-people-fill"></i></p>
        <p>Profile</p>
        </div>
        <img src={logo} alt="img" />
        <div>
        <p><i class="bi bi-list-ul"></i></p>
        <p>Follow List</p>
        </div>
        <div>
        <p><i class="bi bi-chat-text"></i></p>
        <p>Chat</p>
        </div>
      </div>
    </div>
  )
}

export default Footer