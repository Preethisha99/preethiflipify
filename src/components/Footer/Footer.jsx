import React from 'react'
import css from './Footer.module.css'
import Logo from '../../assets/logo.png'
import {InboxIcon ,
        PhoneIcon ,
        LocationMarkerIcon,
        LoginIcon,
        UsersIcon ,
        LinkIcon,
    } from "@heroicons/react/outline";

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr></hr>
      <div className={css.cFooter}>
        <div className={css.logo}>
            <img src={Logo} alt=""></img>
            <span>Flipkart</span>
        </div>
        <div className={css.block}>
            <div className={css.detail}>
                <span>Contact Us</span>
                <span className={css.pngLine}>
                    <LocationMarkerIcon className={css.icon}></LocationMarkerIcon>
                    <span>111 North Avenue Orlando , FL 677000</span>
                </span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
