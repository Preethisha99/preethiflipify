import React from 'react'
import css from './Testimonials.module.css'
import Hero from  '../../assets/testimonialHero.png'
import {TestimonialsData} from "../../data/testimonials"
import {Swiper , SwiperSlide} from 'swiper/react'

const Testimonials = () => {
  return (
    <div className={css.testimonials}>
      <div className={css.wrapper}>
        <div className={css.container}>
        <span>Top Rated</span>
        <span>Seedily Say Has Suitable Disposal and Boy , Exercise Joy Man Children Rejoined </span>
        </div>
      
      <img src={Hero} alt=""></img>
      <div className={css.container}>
        <span>100k</span>
        <span>Happy Customers With Us</span>
      </div>
      </div> 
       {/* REVIEW  */}
      <div className={css.reviews}>
        Review
      </div>

        {/* carousal  */}
        <div className={css.carousel}>
            <Swiper
            slidesPerView={3}
            slidesPerGroup={1}
            spaceBetween={20}
            className={css.tCarousel}
            >
                {
                    TestimonialsData.map((testimonial , i)=> (
                        <SwiperSlide>
                            <div className={css.testimonial}>
                                <img src={testimonial.image}  alt=""></img>
                                <span>{testimonial.comment}</span>
                                <hr></hr>
                                <span>{testimonial.name}</span>
                            </div>
                        </SwiperSlide>
                    )   )
                }
            </Swiper>
        </div>
    </div>

    
  )
}

export default Testimonials;
