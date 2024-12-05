'use client'
import React from 'react'
import styles from './Footer.module.scss'
import Link from 'next/link'
import { FaFacebookF, FaFacebookSquare, FaInstagram, FaLinkedinIn, FaSearch, FaYoutube } from 'react-icons/fa';
import { MdCall } from "react-icons/md";
import { GoMail } from "react-icons/go";
import { FaXTwitter } from "react-icons/fa6";
import img1 from './(image)/sectigo_trust_seal_lg_140x54.png'
import Image from 'next/image';


const footerData = [
    {
        title: 'About Company',
        links: [
            { title: 'Company Profile', link: "https://www.stancor.in/quality-policy" },
            { title: 'Mission', link: "https://www.stancor.in/our-mission", },
            { title: 'Vision', link: "https://www.stancor.in/our-mission", },
            { title: 'Quality Policy', link: "https://www.stancor.in/shop" },
        ]
    },
    {
        title: 'Products & Services',
        links: [
            { title: 'Steel & Commodities', link: "https://www.stancor.in/sales", },
            { title: 'Manufacturing', link: "https://www.stancor.in/logistics", },
            { title: 'Services', link: "https://www.stancor.in/technical", },
        ]
    },
    {
        title: 'Contacts',
        links: [
            { title: 'Sales & Exports', link: "https://www.stancor.in/sales", },
            { title: 'Technical & Quality Control', link: "https://www.stancor.in/logistics", },
            { title: 'Shipping & Logistics', link: "https://www.stancor.in/technical", },
        ]
    },

];

const socialicons = [
    { icon: <FaFacebookSquare />, link: 'https://www.facebook.com/stancoralloys/' },
    { icon: <FaXTwitter />, link: 'https://twitter.com/stancoralloys' },
    { icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/company/stancor-alloys-inc' },
    { icon: <FaYoutube />, link: 'https://www.youtube.com/stancoralloys/' },
    { icon: <FaInstagram />, link: 'https://www.instagram.com/stancoralloys/"' },
]

const Footer = () => {
    return (
        <div>
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
                        <p><span><MdCall /></span> +912265271000</p>
                        <p>
                            <span><GoMail /></span>
                            <Link href="mailto:info@stancor.in">info@stancor.in</Link>
                        </p>
                        <div className={styles.socialLinks}>
                            {socialicons.map(item => {
                                return <Link href={item.link} target="_blank"><span>{item.icon}</span></Link>
                            })}
                        </div>
                    </div>
                    <div className={styles.midSection}>
                        <div className={styles.searchSection}>
                            <input type="text" placeholder='Search...' />
                            <button className='button'><FaSearch /></button>
                        </div>
                        <div className={styles.linkSection}>
                            {footerData.map((section, index) => {
                                return < div key={index} >
                                    <h3>{section.title}</h3>
                                    <ul >
                                        {section.links.map((item) => {
                                            return (<li key={item.link}>
                                                <Link
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <span >{item.title}</span>
                                                </Link>
                                            </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            })}
                        </div>
                        <div className={styles.logo}>
                            <Image src={img1} alt='sectigo_trust_seal'></Image>
                        </div>

                    </div>
                    <div className={styles.rightSection}>
                        <h3>Newsletter Signup :</h3>
                        <div>
                            <input type="text" placeholder='Your mail...' />
                            <button className='button'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.copyrightSection}>
            <span>Copyright © Stancor Alloys Private Limited</span>
        </div>
        </div>
    )
}

export default Footer