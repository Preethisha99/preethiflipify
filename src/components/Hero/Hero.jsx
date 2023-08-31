import React from 'react'
import css from './Hero.module.css'
import HeroImg from '../../assets/hero.png'
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'

const Hero = () => {
  return (
    <div className={css.container}>
        {/* left side  */}
        <div className={css.h_sides}>
            <span className={css.text1}>Skin Protection Cream</span>

            <div className ={css.text2}>
                <span>Trendy Collection</span>
                <span>
                {" "}
                Do Exercise regularly , it is way to become young
                </span>
            </div>
        </div>
        {/* middle side hero image section  */}
        <div className={css.wrapper}>
            <div className={css.blueCircle}></div>
            <img src={HeroImg} alt="" width={600}></img>
            <div className={css.cart2}>
                <RiShoppingBagFill/>
                <div className={css.signup}>
                    <span>Best SignUp Offers</span>
                    <div>
                        <BsArrowRight/>
                    </div>
                </div>

            </div>
        </div>
    {/* right side  */}
    <div className={css.h_sides}>
        <div className={css.traffic}>
            <span>1.5 m</span>
            <span>Monthly Traffic</span>
        </div>
        <div className={css.customers}>
            <span>100k</span>
            <span>Happy Customers</span>
        </div>
    </div>
    </div>
  )
}

export default Hero
