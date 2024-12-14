'use client'
import React from 'react'
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from '../../(images)/p1.png'
import img2 from '../../(images)/p2.png'
import img3 from '../../(images)/p3.jpg'
import img4 from '../../(images)/p4.png'
import img5 from '../../(images)/p5.png'
import img7 from '../../(images)/p7.png'
import img0 from '../../(images)/p0.png'

import Link from 'next/link'
import Image from 'next/image'
import styles from './OurPartners.module.scss'

const data = [
  { image: img0 }, { image: img1 }, { image: img2 },{ image: img3 },  { image: img4 }, { image: img5 },  { image: img7 },
]

const OurPartners = () => {
  return (
    <div className={`our-partners-section ${styles.mainSection}`}>
      <div className="ccontainer">
        <h1 className="title">Our Product</h1>
        <div className={styles.container}>
          <Swiper
            navigation
            pagination={{ type: "bullets", clickable: true }}
            autoplay={true}
            loop={true}
            modules={[Autoplay, Navigation]}
            slidesPerView={6} // Number of visible slides at once
            spaceBetween={10} // Space between slides
            speed={1000}
            className={styles.swiperConatiner}
          >
            {data.map((e) => {
              return (
                <SwiperSlide key={e.url} >
                    <Image src={e.image} alt="img" />
                </SwiperSlide>
              )
            })}
          </Swiper>

        </div>
      </div>
    </div>
  )
}

export default OurPartners