'use client'
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookSquare, FaInstagram, FaLinkedinIn, FaSearch, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import { MdCall } from "react-icons/md";
import styles from './Footer.module.scss';
import logo from "@/../public/images/logo.png";


const footerData = [
    {
        title: 'Important Links',
        links: [
            { title: 'Home', link: "/", },
            { title: 'Services', link: "/services" },
            { title: 'Contact-us', link: "/contact-us", },
            { title: 'Products', link: "/products" },
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
                <div className={styles.rightSection}>
                        <div className='flex gap-2 object-center content-center' >
                        <Image src={logo} alt="Logo" className="w-16     h-16 " />
                       
                        <p className='text-balance' >R J Enterprise, with over 20 years of expertise, specializes in high-quality steel trading for industries like construction, Oil & Gas, and manufacturing. We source premium materials globally, ensuring quality, reliability, and timely delivery, making us a trusted partner in your success.</p>
                        </div>
                    </div>
                    <div className={styles.midSection}>
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

                    </div>
                    <div className={styles.infoSection}>

                        <p><span><MdCall /></span> +912265271000</p>
                        <p>
                            <span><GoMail /></span>
                            <Link href="mailto:info@stancor.in">info@stancor.in</Link>
                        </p>
                        <div className={styles.socialLinks}>
                            {socialicons.map(item => {
                                return <Link key={item.link} href={item.link} target="_blank"><span>{item.icon}</span></Link>
                            })}

                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div className={styles.copyrightSection}>
            <span>Copyright © RJ Enterprice</span>
        </div>
        </div>
    )
}

export default Footer