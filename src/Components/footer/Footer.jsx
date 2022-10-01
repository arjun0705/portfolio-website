import React from 'react'
import "./Footer.css"
import { BsTwitter } from "react-icons/bs"
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
        <a href="https://twitter.com" target="_blank"><BsTwitter /></a>
        <a href="https://instagram.com" target="_blank"><BsInstagram /></a>
        <a href="https://github.com" target="_blank"><BsGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Design & Develope by Arjun Samrat | all rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
