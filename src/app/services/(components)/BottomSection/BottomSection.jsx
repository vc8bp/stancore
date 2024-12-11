'use client'
import React from 'react'
import plasmacutting from '../../(images)/gettyimages-555049935-612x612.jpg'
import Drilling from '../../(images)/gettyimages-1419358702-612x612.jpg'


import styles from './BottomSection.module.scss'
import Image from 'next/image'

const data = [
    {
        img: plasmacutting,
        title: "Profile Cutting",
        text: "Profile cutting service involve the process of cutting steel and metal materials into specific shapes and sizes based on customer requirements, using advanced machinery and techniques to achieve precise, accurate cuts."
    },
    {
        img: Drilling,
        title: "Light Fabrication Services",
        text: "we offer customized fabrication services to meet the specific requirements of each project. Whether it's producing custom steel components or fabricating parts to precise dimensions, we work closely with our clients to ensure the best results. Using modern equipment and reliable techniques, we deliver quality fabrication solutions tailored to your needs, with a focus on accuracy and timely delivery."
    },
    // {
    //     img: Bending,
    //     title: "Bending",
    //     text: "Bending is a process by which metal can be deformed by plastically deforming the material and changing its shape. The material is stressed beyond the yield strength but below the ultimate tensile strength. Our company holds immense experience in this domain and is involved in bending Plates for Wide Variety of Applications. We have a state-of-the-art facility."
    // },
    // {
    //     img: ShotBlasting,
    //     title: "Shot Blasting & Painting Shop",
    //     text: "Shot Blasting is a surface treatment process using high velocity steel abrasive. Initially in the 1930's the shotblasting process used compressed air for propelling the steel shot. This method remains in use today for cleaning metal frames and weldments. Leveraging over the skills of our qualified team of professionals, we are instrumental in offering wide range of Wear Classifier & Blade Cutting. Analyzing particles in clean."
    // },
    // {
    //     img: Wearparts,
    //     title: "Wear Parts",
    //     text: 'Wear Parts Division at Stancor Inc. offers you the "Total System" approach. This means we are one-stop source for all your wear parts needs including machining, grinding, brazing, lapping, assembly and shipment to your specified destination.'
    // },
    // {
    //     img: customized,
    //     title: "Customized Services",
    //     text: "Stancor Inc. can do light fabrication if the project of the customer demands the same and offers a host of customized industrial metal fabrication services tailored to your project requirements. Our one-stop Tajoja MIDC Fabrication shop is fully equipped to deliver premium industrial custom metal work services quickly and efficiently."
    // },
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