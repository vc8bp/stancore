import React from 'react'
import styles from './ServicesBanner.module.scss'

const ServicesBanner = () => {
    return (
        <div className={styles.serviceBanner}>
            <div className={styles.bannerImg}></div>
            <div className={`ccontainer ${styles.container}`}>
                <div className={styles.content}>
                    <h1 className="title">Services</h1>
                    <p>Stancor offers a variety of value added services to accompany its core business as a major steel stockholder. These services are designed to offer you a more complete service, making it easier for you receive total steel solutions from one port of call.</p>
                </div>
            </div>
        </div>
    )
}

export default ServicesBanner