'use client'
import React from 'react'
import plasmacutting from '../../(images)/plasma-cutting-process.jpg'
import Drilling from '../../(images)/Drilling.jpg'
import Bending from '../../(images)/Bending.jpg'
import ShotBlasting from '../../(images)/Shot-Blasting-&-Painting-Shop.jpg'
import Wearparts from '../../(images)/Wear_parts.jpg'
import customized from '../../(images)/customized-services.jpg'

import styles from './BottomSection.module.scss'
import Image from 'next/image'

const data = [
    {
        img: plasmacutting,
        title: "Plasma Cutting",
        text: "Plasma cutting (plasma arc cutting) is a melting process in which a jet of ionised gas at temperatures above 20,000°C is used to melt and expel material from the cut. This heat melts the metal and the gas flow ejects it from the cut. Our CNC Cutting Facility is high-precision system that can achieve a cut accuracy of ±0.01 to 0.05 in. and kerf widths as narrow as 0.05 in.materials."
    },
    {
        img: Drilling,
        title: "Drilling",
        text: "Drilling is a cutting process that uses a drill bit to cut a hole of circular cross-section in solid materials. The drill bit is usually a rotary cutting tool, often multi-point. The bit is pressed against the work-piece and rotated at rates from hundreds to thousands of revolutions per minute. Our company holds immense experience in Drilling is a cutting process that uses a drill bit to cut a hole of circular cross-section in solid materials. The drill bit is usually a rotary cutting toolpoint."
    },
    {
        img: Bending,
        title: "Bending",
        text: "Bending is a process by which metal can be deformed by plastically deforming the material and changing its shape. The material is stressed beyond the yield strength but below the ultimate tensile strength. Our company holds immense experience in this domain and is involved in bending Plates for Wide Variety of Applications. We have a state-of-the-art facility."
    },
    {
        img: ShotBlasting,
        title: "Shot Blasting & Painting Shop",
        text: "Shot Blasting is a surface treatment process using high velocity steel abrasive. Initially in the 1930's the shotblasting process used compressed air for propelling the steel shot. This method remains in use today for cleaning metal frames and weldments. Leveraging over the skills of our qualified team of professionals, we are instrumental in offering wide range of Wear Classifier & Blade Cutting. Analyzing particles in clean."
    },
    {
        img: Wearparts,
        title: "Wear Parts",
        text: 'Wear Parts Division at Stancor Inc. offers you the "Total System" approach. This means we are one-stop source for all your wear parts needs including machining, grinding, brazing, lapping, assembly and shipment to your specified destination.'
    },
    {
        img: customized,
        title: "Customized Services",
        text: "Stancor Inc. can do light fabrication if the project of the customer demands the same and offers a host of customized industrial metal fabrication services tailored to your project requirements. Our one-stop Tajoja MIDC Fabrication shop is fully equipped to deliver premium industrial custom metal work services quickly and efficiently."
    },
]

const BottomSection = () => {
    return (
        <div className={styles.serviceBottomSection}>
            <div className="ccontainer">
                {data.map((item) => {
                    return (
                        <div key={item.title} className={styles.contentSection}>
                            <div className={styles.imageWrapper}>
                               <Image src={item.img} alt={item.title}/>
                            </div>
                            <div className={styles.leftSection}>
                                <h1 className="title">{item.title}</h1>
                                <div className="borderline"></div>
                                <p>{item.text}</p>
                            </div>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default BottomSection