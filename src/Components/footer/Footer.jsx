import React from 'react'
import "./Footer.css"
import { SiLinkedin } from "react-icons/si"
import { BsInstagram } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"

function Footer() {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>ARJUN</a>

      <ul className='permalinks'>
        <li> <a href="#">Home</a> </li>
        <li> <a href="#about">About</a> </li>
        <li> <a href="#experience">Experience</a></li>
        <li> <a href="#services">Services</a></li>
        <li> <a href="#Portfolio">Portfolio</a></li>
        <li> <a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://github.com/arjun0705" target="_blank"><BsGithub /></a>
        <a href="https://www.linkedin.com/in/arjun-samrat-23b7b11aa/" target="_blank"><SiLinkedin /></a>
        <a href="https://instagram.com" target="_blank"><BsInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Design & Developed by Arjun Samrat | all rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
