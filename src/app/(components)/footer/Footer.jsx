'use client'
import React from 'react'
import styles from './Footer.module.scss'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className={styles.footerSection}>
            <div className="ccontainer">
                <div className={styles.footerContnet}>
                    <div className={styles.infoSection}>
                        <div className={styles.googlemap}>
                            <iframe
                                src="https://maps.google.com/maps?q=Mahatma Gandhi Memorial Building, Bldg No 7, Netaji Subhash Road, Near Kaivalyadham, 3rd Floor,Charni Road, Mumbai 400002 Maharashtra India &width=100%&hl=en&t=&z=14&ie=UTF8&iwloc=&output=embed"
                                width="600"
                                height="450"
                                frameborder="0"
                                style={{ border: 0 }}
                                allowfullscreen=""
                                aria-hidden="false"
                                tabindex="0"
                            />
                        </div>
                        <p> +912265271000</p>
                        <p>
                            <span></span>
                            <Link href="mailto:info@stancor.in">info@stancor.in</Link>
                            </p>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Footer