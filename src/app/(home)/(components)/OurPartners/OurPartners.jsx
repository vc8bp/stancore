'use client'
import React from 'react'
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from '../../(images)/partner-logo.png'
import Link from 'next/link'
import Image from 'next/image'
import styles from './OurPartners.module.scss'

const data = [
  { image: img1, url: 'https://www.stancor.in/brand/am-ns-india-1' },
  { image: img1, url: 'https://www.stancor.in/brand/am-ns-india-1' },
  { image: img1, url: 'https://www.stancor.in/brand/am-ns-india-1' },
  { image: img1, url: 'https://www.stancor.in/brand/am-ns-india-1' },
  { image: img1, url: 'https://www.stancor.in/brand/am-ns-india-1' },
  { image: img1, url: 'https://www.stancor.in/brand/am-ns-india-1' },
  { image: img1, url: 'https://www.stancor.in/brand/am-ns-india-1' },
  { image: img1, url: 'https://www.stancor.in/brand/am-ns-india-1' },
  { image: img1, url: 'https://www.stancor.in/brand/am-ns-india-1' },
]

const OurPartners = () => {
  return (
    <div className={`our-partners-section ${styles.mainSection}`}>
      <div className="ccontainer">
        <h1 className="title">Our Partners</h1>
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
                  <Link href={e.url} target='blank'>
                    <Image src={e.image} alt="img" />
                  </Link>
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