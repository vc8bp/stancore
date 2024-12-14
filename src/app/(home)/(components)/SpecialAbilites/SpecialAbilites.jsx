import React from 'react'
import styles from './SpecialAbilites.module.scss'

const SpecialAbilites = () => {
    return (
        <div className={`${styles.mainSection} `}>
                <div className={styles.bannerImg}></div>
                <div className={`${styles.content} ccontainer`}>
                    <div>
                        <h2>Quality</h2>
                        <ul>
                            <li>Being an ISO certified company, We are committed to provide quality products at Economical price with Schedule consistency to our Clients.</li>
                            <li>Our adherence to principles of Total Quality Management (TQM) has helped us in receiving ISO 9001: 2008 certification.</li>
                            <li>Our Quality of Products is Suitable to All Industries.</li>
                        </ul>
                    </div>

                </div>
        </div>
    )
}

export default SpecialAbilites