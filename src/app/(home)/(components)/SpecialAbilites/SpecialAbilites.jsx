import React from 'react'
import { FaThumbsUp, FaTrophy } from "react-icons/fa";
import { RxCopy } from "react-icons/rx";
import countimg from '../../(images)/number-count-bg.jpg'
import styles from './SpecialAbilites.module.scss'
const data = [
    {
        icon: <FaThumbsUp />,
        header: "High Quality Work",
        content: "One key performance indicator (KPI) is often “improve quality.” But, in steel manufacturing, it’s not necessarily about arbitrarily improving quality, it’s about delivering consistency."
    },
    {
        icon: <RxCopy />,
        header: "Expert & Professional",
        content: "We have a team of experts and professionals who are one of the top class performers having thorough knowledge of steel manufacturing and their properties. They can create a huge difference in the quality of steel."
    },
    {
        icon: <FaTrophy />,
        header: "Award Winning",
        content: "Stancor has won various awards for their excellence in steel distribution and manufacturing activities. Stancor is a Star Export house recognized by the Government of India and companies worldwide."
    }
]

const countData = [
    { number: "4100 +", title: "Projects" },
    { number: "1200", title: "Employees" },
    { number: "1550", title: "Products" },
    { number: "15", title: "Services" },
    { number: "18", title: "Offices" },
]

const SpecialAbilites = () => {
    return (
        <div className={styles.mainSection}>
            <div className="ccontainer">
                <h1 className="title">Our Unique Special Abilities Which Differs us from our Competitors</h1>
                <div className={styles.cards}>
                    {data.map((item) => {
                        return (
                            <div key={item.header} className={styles.singleCard}>
                                <div className={styles.icon}>
                                    <span>{item.icon}</span>
                                </div>
                                <h2>{item.header}</h2>
                                <p>{item.content}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={styles.numberCount}>
                <div className="ccontainer">
                    <div className={styles.count}>
                        {
                            countData.map((e) => {
                                return (
                                    <div key={e.title}>
                                        <h2>{e.number}</h2>
                                        <p>{e.title}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialAbilites