import React from 'react'
import aboutimg from '../../(images)/about-us.jpg'
import styles from './AboutUs.module.scss'
import Image from 'next/image'
import Link from 'next/link'

//main 


const AboutUs = () => {
    return (
        <>
            <div className={styles.section}>
                <div className='ccontainer'>
                    <h1>About Us</h1>
                    <div className="borderline"></div>
                    <div className={styles.detailsSection}>
                        <div className={styles.content}>
                            <h2>R J Enterprise – Your Trusted Partner in Steel Trading for Over 20 Years</h2>
                            <p>With more than two decades of experience in the steel industry, R J Enterprise has established itself as a leading name in the steel trading sector. Founded on the principles of quality, reliability, and customer satisfaction, we have built long-lasting relationships with suppliers and clients alike, serving industries across the Nation.</p>
                            <p>We specialize in sourcing and distributing a wide range of high-quality steel products, including [list specific products like bars, plates, coils, beams, pipes, etc.], catering to various sectors such as construction, Oil & Gas, manufacturing, infrastructure, Power Plants, Petrochemicals, Pipelines, Pharma, automotive, and more. Our extensive network allows us to procure steel from trusted mills worldwide, ensuring that our customers receive the best materials at competitive prices.</p>
                            <p>What sets us apart is our commitment to excellence at every step. Our team of experts ensures that every product we supply meets the highest industry standards, and our logistics team ensures timely and efficient delivery to locations both near and far.</p>
                            <p>R J Enterprise is not just a steel supplier, but a dedicated partner in your business success. Whether you are a large corporation or a small enterprise, we are here to provide you with the quality materials and exceptional service you need to thrive in today's compitative market.</p>
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