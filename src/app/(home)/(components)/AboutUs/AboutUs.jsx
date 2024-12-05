import React from 'react'
import aboutimg from '../../(images)/about-us.jpg'
import styles from './AboutUs.module.scss'
import Image from 'next/image'
import Link from 'next/link'




const AboutUs = () => {
    return (
        <>
            <div className={styles.section}>
                <div className='ccontainer'>
                    <h1>About Us</h1>
                    <div className="borderline"></div>
                    <div className={styles.detailsSection}>
                        <div className={styles.content}>
                            <p>We Stancor are a part of USD 1.5 Billion Stancor Group having presence and strong infrastructure in Oil & Gas, Power Plants, Refineries, Petrochemicals, Pipelines, Pharma, Information Technology, Chemicals & Robotics. Stancor is having presence in over 12 countries with over 1200 employees. Stancor enjoys a strong business relationship with most of the Fortune 500 Companies in All Sectors.Our commitment & dedication to deliver quality product is realized by our professional team of highly qualified Project Sales Engineers, Big Warehousing Facilities, Logistic Experts, Procurement Specialists, and Efficient Coordinating Staff.</p>
                            <p>Stancor Group is having manufacturing Factories & Distribution Centres, Corporate Offices in India, Africa & Middle East Region. In our journey of 4 decades, we have successfully executed so many projects of national and international significance and are totally conversant with philosophy of highest quality standards. We have strong infrastructure to serve all types of customers in various sectors like Oil & Gas, Power Plants, Refineries, Petrochemicals, Pipelines etc. Our commitment & dedication to deliver quality product is realized by our professional team of highly qualified Project Sales Engineers, Big Warehousing Facilities, Logistic Experts, Procurement Specialists, Information Technology Team and Efficient Coordinating Staff.</p>
                            <button>
                                <Link target='blank' className='button' href="https://www.stancor.in/profile">Know more</Link>
                            </button>
                        </div>
                        <div className={styles.imgWrapper}>
                            <Image src={aboutimg} alt="about-us img" />
                        </div>
                    </div>
                </div>
            </div>
         
        </>
    )
}

export default AboutUs