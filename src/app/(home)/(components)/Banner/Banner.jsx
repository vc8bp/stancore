'use client'
import React from 'react'
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from '../../(images)/s1.jpg'
import img2 from '../../(images)/s2.jpg'
import img3 from '../../(images)/s3.jpg'
import img4 from '../../(images)/s4.jpg'
import img5 from '../../(images)/s5.jpg'
import img6 from '../../(images)/s6.jpg'
import img7 from '../../(images)/s7.jpg'
import img8 from '../../(images)/s8.jpg'
import styles from './Banner.module.scss'



const data = [
  {
    "id": 1,
    "image": img1,

  },
  {
    "id": 2,
    "image": img2,

  },
  {
    "id": 3,
    "image": img3,

  },
  {
    "id": 4,
    "image": img4,

  },
  {
    "id": 5,
    "image": img5,

  },
  {
    "id": 6,
    "image": img6,
  },
  {
    "id": 7,
    "image": img7,
  },
  {
    "id": 8,
    "image": img8,
  },

]



const Banner = () => {
  console.log({ data })
  return (
    <div className={styles.bannerSection}>
      <Swiper
        navigation
        pagination={{ type: "bullets", clickable: true }}
        autoplay={true}
        loop={true}

        modules={[Autoplay, Navigation]}
        speed={1000}
        className={styles.swiperConatiner}
      >
        {data.map((item ) => {
          return (<SwiperSlide key={item.id}>
            <div
              className="h-full w-full absolute left-0 top-0"
              style={{
                backgroundImage: `url(${item.image.src})`, // Use image.src to get the URL
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "scroll",
              }}
            ></div>
            <div className="h-full w-full absolute left-0 top-0 bg-black opacity-20"></div>
            {/* <div className={styles.container}>
              <div className={styles.content}>
                <h1>{item.title}</h1>
                <h2>{item.tagline}</h2>
                <p>{item.desc}</p>
              </div>
            </div> */}
          </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Banner