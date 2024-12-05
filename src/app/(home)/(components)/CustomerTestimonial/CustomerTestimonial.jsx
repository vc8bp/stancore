import React from 'react'
import Image from 'next/image'
import img1 from '../../(images)/n-srinivasa.png'
import img2 from '../../(images)/peter-jianki.png'
import img3 from '../../(images)/arun-nikar.png'
import styles from './CustomerTestimonial.module.scss'
import { FaQuoteLeft } from 'react-icons/fa'

const testimonialData = [
    {
        logo: img1,
        name: 'N Srinivasa',
        designation: 'Procurement Head',
        content: 'One of the Worlds Best Partners for Steel Goods. They have their professional approach towards every project what they execute"'
    },
    {
        logo: img2,
        name: 'Peter Jianki',
        designation: 'CH Head',
        content: '"Our Most Reliable and Trustworthy Partner for Supply of Steel Pipes and Plates"'
    },
    {
        logo: img3,
        name: 'Arun Nikar',
        designation: 'Public Relations',
        content: '"They know Steel well than most of the companies in this industry"'
    },
]

const CustomerTestimonial = () => {
    return (
        <div className={styles.testimonialSection}>
            <div className="ccontainer">
                <h1 className="title">Customer Testimonials</h1>
                <div className={styles.card}>
                    {testimonialData.map((item) => {
                        return (
                            <div key={item.name} className={styles.singleCard}>
                                <div className={styles.cardTopSection}>
                                    <Image src={item.logo} alt={item.name} />
                                    <div className={styles.designation}>
                                        <h2>{item.name}</h2>
                                        <p>{item.designation}</p>
                                    </div>
                                </div>
                                <div className={styles.cardBottom}>
                                    <span><FaQuoteLeft /></span>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CustomerTestimonial