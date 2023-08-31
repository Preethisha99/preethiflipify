import React from 'react'
import css from './Header.module.css'
import Logo from '../../assets/logo.png'
import {CgShoppingBag} from 'react-icons/cg'
const Header = () => {
  return (
    <div className={css.container}>
        <div className={css.logo}>
            <img src={Logo}></img>
            <span>Flipkart</span>
        </div>
        <div className={css.right}>
            <div className={css.menu}>
               <div className={css.menu}>
                <li>Collections</li>
                <li>Brands</li>
                <li>New collection</li>
                <li>Sales</li>
                <li>ENG</li>
               </div>
            </div>
            <input type='text' className={css.search} placeholder='Search'></input>
            {/* <span>PNG icon of the cart</span> */}
            <CgShoppingBag className={css.cart}/>      
         </div>
    </div>
  )
}

export default Header
