import styles from '../../../services/(components)/ServicesBanner/ServicesBanner.module.scss'

const ConatctBanner = () => {
  return (
    <div className={styles.serviceBanner}>
            <div className={styles.conatctBannerImg}></div>
            <div className={`ccontainer ${styles.container}`}>
                <div className={styles.content}>
                    <h1 className="title">Contact Us</h1>
                    <p>Reach out to R J Enterprise for all your steel trading needs. Whether you have questions, need a quote, or want to explore our product range, our team is here to assist you. Let us help drive your projects with quality and excellence!</p>
                </div>
            </div>
        </div>
  )
}

export default ConatctBanner