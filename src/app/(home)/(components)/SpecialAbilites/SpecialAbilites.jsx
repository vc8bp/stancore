import React from 'react'
import styles from './SpecialAbilites.module.scss'
import { Button } from "@/components/ui/button";


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
                <Button
                    style={{ transition: "all 0.3s ease-in-out" }}
                    // onClick={onClick}
                    className={`px-6 py-3 bg-[var(--db)] text-white font-semibold rounded-md 
                  shadow-lg hover:bg-[var(--db)] transition-transform transform hover:scale-105 
                  hover:text-[var(--seccolor)] mt-4 `}
                >
                    view Certificate
                </Button>
            </div>
        </div>
    )
}

export default SpecialAbilites