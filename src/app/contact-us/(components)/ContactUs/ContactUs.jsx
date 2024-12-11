import React from 'react'
import Link from 'next/link'
import styles from './ContactUs.module.scss'
import { FaAddressCard } from 'react-icons/fa'
import { SlMap } from "react-icons/sl";
import { GrMail } from "react-icons/gr";
import Form from './Form';


const topdata = [
    {
        title: 'Domestic Sales',
        desc: 'Helping our customers drive sales growth is our priority and our specialty. Our team of dedicated professionals work with you to create high-impact campaigns that fit your business goals by providing stellar service and creative solutions.',
        button: 'Domestic Sales & Marketing Team ',
        url: 'https://www.stancor.in/sales'
    },
    // {
    //     title: 'Shipping & Logistics',
    //     desc: 'Our Logistics Team is a Dedicated Division for Handling all Logistics related work combining value-added and management services with traditional fulfillment and distribution, our customized, integrated logistics solutions drive efficiency, improve quality and create competitive advantage.',
    //     button: 'Shipping & Logistics Team',
    //     url: 'https://www.stancor.in/logistics'
    // },
    {
        title: 'Export Sales',
        desc: "Stancor Group's Export Sales & Marketing is responsible of Developing and executing marketing campaigns and promotions to drive sales and brand awareness. Monitor and analyze market trends and competition to inform product development and pricing strategies.",
        button: 'Export Sales & Marketing Team',
        url: 'https://www.stancor.in/technical'
    },
]

const features = [
    {
        title: 'Stancor Alloys Private Limited (Head Office)',
        url: 'https://www.stancor.in/contact-us#',
        address:
            <>
                Mahatma Gandhi Memorial Building, 3rd Floor <br />
                Next to Kaivalyadham, Before Catholic Gymkhana <br />
                Marine Drive, Mumbai - 400 002. <br />
                Maharashtra, India <br />
                Office Board Line: +91 22 35071030 (30 Lines) <br />
                Helpline / Customer Service: +91 22 49163016 <br />
            </>
    },
    {
        title: 'Stancor Alloys Private Limited (Warehouse)',
        address:
            <>
                CMR Industrial Park <br />
                Plot No. A, Survey No. 87/3, 93/1, 2 & 3, <br />
                Behind Kingfisher Breweries, Near Enkay Garden, <br />
                Taloja Midc, Village – Vavanje, Dist. Raigad <br />
                Works Board Line: +91 22 48964066 <br />
            </>
    },
]


const ContactUs = () => {
    return (
        <div className={styles.contactSection}>
            <div className="ccontainer">
                <div className={styles.topSection}>
                    {topdata.map((e) => {
                        return (
                            <div key={e.title}>
                                <h2 className="title">{e.title}</h2>
                                <p>{e.desc}</p>
                                <Link className='button' href={e.url} target='blank'>{e.button}</Link>
                            </div>
                        )
                    })}
                </div>

                <div className={styles.bottomSection}>
                    <div className={styles.leftSection}>
                        <Form/>
                    </div>
                    <div className={styles.rightSection}>
                        <h2 className="title">Contact info</h2>
                        <h3 className='title'>Stancor Alloys Private Limited</h3>
                        <div className={styles.address}>
                            <div className={styles.icon}>
                                <span ><FaAddressCard /></span>
                            </div>
                            <div>
                                <h3>Head Office:</h3>
                                <p>
                                    Mahatma Gandhi Memorial Building, 3rd Floor <br />
                                    Next to Kaivalyadham, Before Catholic Gymkhana <br />
                                    Marine Drive, Mumbai - 400 002.  <br />
                                    Maharashtra, India <br />
                                    Office Board Line: +91 22 35071030 (30 Lines) <br />
                                    Helpline / Customer Service: +91 22 49163016
                                </p>
                            </div>
                        </div>
                        <div className={styles.mailInfo}>
                            <div className={styles.icon}>
                                <span ><GrMail /></span>
                            </div>
                            <div>
                                <p>Domestic Sales: sales.india@stancor.in</p>
                                <p>Export Sales: sales.export@stancor.in</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactUs