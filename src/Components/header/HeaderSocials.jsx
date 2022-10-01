import React from 'react'
import{BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai"

function HeaderSocials() {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com" target="blank"><BsLinkedin/></a>
      <a href="https://github.com" target="blank"><FaGithub/></a>
      <a href="https://instagram.com" target="blank"><AiFillInstagram/></a>
      
    </div>
    
  )
}

export default HeaderSocials
