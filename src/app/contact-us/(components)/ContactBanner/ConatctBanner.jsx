import React from 'react'
import styles from '../../../services/(components)/ServicesBanner/ServicesBanner.module.scss'

const ConatctBanner = () => {
  return (
    <div className={styles.serviceBanner}>
            <div className={styles.conatctBannerImg}></div>
            <div className={`ccontainer ${styles.container}`}>
                <div className={styles.content}>
                    <h1 className="title">Contact Us</h1>
                    <p>Stancor Group's Head Office is Situated Right in the Heart of South Mumbai's Opera House. Our other office and factory locations are strategically chosen to cover the wide market base in India as well as Middle East and Europe.</p>
                </div>
            </div>
        </div>
  )
}

export default ConatctBanner