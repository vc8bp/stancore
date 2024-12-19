import React from 'react'
import Link from 'next/link'
import styles from './ContactUs.module.scss'
import { FaAddressCard } from 'react-icons/fa'
import { SlMap } from "react-icons/sl";
import { GrMail } from "react-icons/gr";
import Form from './Form';

const topdata = [
    {
        title: 'Domestic Sales & Marketing',
        desc: 'Helping our customers drive sales growth is our priority and our specialty. Our team of dedicated professionals work with you to create high-impact campaigns that fit your business goals by providing stellar service and creative solutions.',
        button: 'Domestic Sales & Marketing Team ',
        name: "R. Jadhav",
        number: "+91 8828403987",
        email: "sales@rjenterpriseinfo.com"
    },
]

const ContactUs = () => {
    return (
        <div className={styles.contactSection}>
            <div className="ccontainer">
                <div className={styles.bottomSection}>
                    <div className={styles.topSection}>
                        {topdata.map((e) => {
                            return (
                                <div key={e.title} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-2 ">{e.title}</h2>
                                    <p className="text-gray-600 mb-4">{e.desc}</p>

                                    <div className="mt-4 border-t border-gray-200 pt-4 ">
                                        <p className="text-gray-800 font-medium">{e.name}</p>
                                        <p className="text-gray-500 ">{e.email}</p>
                                        <p className="text-gray-500 ">{e.number}</p>
                                    </div>

                                    <p className="text-gray-800 font-medium mt-5 mb-2">Address</p>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.09559914972937!2d72.82717459941061!3d19.47583845708235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9ea0e04c819%3A0xb3f56f58729a1ca6!2sFRGG%2BCW7%2C%20Virar%20East%2C%20Virar%2C%20Maharashtra%20401303!5e0!3m2!1sen!2sin!4v1734617522855!5m2!1sen!2sin" width="100%" height="300px" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            )
                        })}
                    </div>
                    <div className={styles.leftSection}>
                        <Form />
                    </div>

                    
                    {/* <div className={styles.rightSection}>
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
                    </div> */}
                </div>
            </div>

        </div>
    )
}

export default ContactUs