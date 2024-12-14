import React from 'react'
import styles from './ServicesBanner.module.scss'

const ServicesBanner = () => {
    return (
        <div className={styles.serviceBanner}>
            <div className={styles.bannerImg}></div>
            <div className={`ccontainer ${styles.container}`}>
                <div className={styles.content}>
                    <h1 className="title">Services</h1>
                    <p>R J Enterprise complements its core steel trading business with practical value-added services to meet diverse customer needs. From cutting and fabrication to efficient logistics, we aim to make steel procurement straightforward and reliable. Our focus is on delivering quality products and dependable service, ensuring our customers have the support they need for their projects.</p>
                </div>
            </div>
        </div>
    )
}

export default ServicesBanner