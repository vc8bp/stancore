'use client'
import React from 'react'
import styles from './LatestPosts.module.scss'
import img1 from "../../(images)/1.jpg"
import img2 from "../../(images)/2.jpg"
import img3 from "../../(images)/3.jpg"
import Image from 'next/image'
import Link from 'next/link'


const postData = [
    {
        title: "JSW Steel moves Supreme Court on Rs 2,600-cr tax dispute with Odisha",
        date: "June 02, 2022",
        image: img1,
        subtitle: "The BSE-listed steel company had earlier sought temporary relief from the Orissa High Court to restrain the state tax authorities from effecting recoveries until its final order on the dispute, but the court declined the steelmaker's plea.",
        blog_url: "https://www.stancor.in/blog/jsw-steel-s-crude-steel-production-up-7-in-october-at-13-38-lakh-tonnes-8/post/jsw-steel-moves-supreme-court-on-rs-2-600-cr-tax-dispute-with-odisha-5"
    },
    {
        title: "Revenue loss due to customs duty rationalisation in iron, steel and plastic seen at Rs 10K-15K cr.",
        date: "June 02, 2022",
        image: img2,
        subtitle: "The government is expecting a revenue loss of Rs 10,000-15,000 crore as a result of the recent customs tax recalculation on iron and steel and plastic. With effect from May 22, it abolished customs duties on the import of some raw materials needed by the steel industry, lowering costs for the domestic industry and",
        blog_url: "https://www.stancor.in/blog/apl-apollo-tubes-signs-pact-with-zamil-steel-5/post/revenue-loss-due-to-customs-duty-rationalisation-in-iron-steel-and-plastic-seen-at-rs-10k-15k-cr-2"
    },
    {
        title: "10 applicants so far; govt extends PLI scheme for specialty steel for third time till June 30",
        date: "June 01, 2022",
        image: img3,
        subtitle: "Initially, March 29 was the last date for manufacturers to apply for the benefits under the PLI (Production-Linked Incentive) scheme for speciality steel. It was later extended till April 30 and again to May 31, 2022.",
        blog_url: "https://www.stancor.in/blog/domestic-steel-industry-showing-signs-of-recovery-6/post/10-applicants-so-far-govt-extends-pli-scheme-for-specialty-steel-for-third-time-till-june-30-3"
    }
]

const LatestPosts = () => {
    return (
        <div className={styles.latestPostsSection}>
            <div className="ccontainer">
                <h1 className='title'>latest Posts</h1>
                <div className={styles.postcards}>
                    {postData.map(e => {
                        return (
                            <div key={e.title} className={styles.singleCard}>
                                <Link href={e.blog_url} target='blank' className={styles.imgWrapper}>
                                    <div>
                                        <Image src={e.image} alt={e.title}/>
                                    </div>
                                </Link>
                                <div className={styles.contnet}>
                                    <div className={styles.dateContent}>
                                        <span>{e.date}</span>
                                    </div>

                                    <div className={styles.descSection}>
                                        <Link href={e.blog_url} target='blank'>
                                            <h2>{e.title}</h2>
                                        </Link>
                                        <p className={styles.subTitle}>{e.subtitle}</p>
                                        <Link href={e.blog_url} target='blank' className={`button ${styles.button}`}>
                                            Read More
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}

export default LatestPosts