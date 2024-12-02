'use client'
import React from 'react'
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from '../../(images)/slide1-steel-plants.jpg'
import img2 from '../../(images)/slide2-pressure-vessels.jpg'
import img3 from '../../(images)/slide3-industrial-fans.jpg'
import img4 from '../../(images)/slide4-excavators.jpg'
import img5 from '../../(images)/slide-5-cutting-metal.jpg'
import img6 from '../../(images)/slide6-defence.jpg'
import styles from './Banner.module.scss'



const data = [
  {
    "id": 1,
    "title": "Steel Pipes Manufacturing",
    "tagline": "Stainless Steel Seamless / Welded Pipes",
    "desc": "Stainless Steel Seamless and ERW Pipes are Manufactured at Stancor Inc's Navi Mumbai Plant. Our Stainless Steel Pipes are Used in Industries Like Oil & Gas , LNG , Desalination, Power, Mining and Minerals.",
    "image": img1,

  },
  {
    "id": 2,
    "title": "Pressure Vessel Manufacturing Industry",
    "tagline": "Boiler Quality Plates ASTM A516 Grade 60 / 70",
    "desc": "Our Steel for pressure vessels, unalloyed, alloyed and creep-resisting is one of the Best Boiler / Pressure Vessel Steel in the World. Our Plates covers carbon steel and alloy steel grades, which are designed for use in making pressure vessels, boilers, heat exchangers and any other vessels and tanks that to store liquid or gas at high pressures.",
    "image": img2,

  },
  {
    "id": 3,
    "title": "Impeller / Industrial Fans Industry",
    "tagline": "High Strength Steel",
    "desc": "Our S690QL / S890QL / S1100QL is a high yield structural steel grade produced in compliance with EN 10025:6:2004. The material is heat treated using the quench and temper process and has good bending and welding properties.",
    "image": img3,

  },
  {
    "id": 4,
    "title": "Excavators /  Mining Industry",
    "tagline": "AR Plates",
    "desc": "AR Steel Plates is a heavy duty ultra-tough steel plate with hardened microstructure which is specially designed to withstand harsh and heavy earth moving applications. It has exceptional strength, toughness, weldability and fatigue resistance. ",
    "image": img4,

  },
  {
    "id": 5,
    "title": "Cutting & Steel Profiling Facility",
    "tagline": "CNC Plasma / Waterjet",
    "desc": "We have In-house Latest CNC Cutting Facilities with CNC Plasma and CNC Waterjet Technology. Our CNC Cutting Facility is high-precision system that can achieve a cut accuracy of ±0.01 to 0.05 in. and kerf widths as narrow as 0.05 in. We can Cut Steel in All Shapes and Sizes with Thickness Upto 200 mm and Width Upto 3500 mm.",
    "image": img5,

  },
  {
    "id": 6,
    "title": "Defence Industry",
    "tagline": "Armor Ballistic Steel",
    "desc": "Armor and ballistic steel are designed for a wide variety of military specifications and structural uses. This material is approved by all Indian departments and agencies for combat and defense applications.",
    "image": img6,

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
            <div className={styles.container}>
              <div className={styles.content}>
                <h1>{item.title}</h1>
                <h2>{item.tagline}</h2>
                <p>{item.desc}</p>
              </div>
            </div>
          </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Banner