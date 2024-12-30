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