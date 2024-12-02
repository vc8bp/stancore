import React from 'react'
import manufacturingImg from "../../(images)/manufacturing.jpg"
import stockImg from "../../(images)/stock.jpg"
import tradingImg from "../../(images)/trading.jpg"
import styles from './OurSteel.module.scss'
import Image from 'next/image'
const commoditiesData = [
  {
    title: "Manufacturing", desc: "Over 10 years Manufacturing experience, We use top quality raw materials products with uniform Wall Thickness.",
    img: manufacturingImg
  },
  {
    title: "Trading",
    desc: "We Call it as Advance Trading Which Involves Buying Goods from World Class Mills in Bulk Quantities and Passing on the Benefits of Pricing to the Customers. All Materials Procured from the Mills are Internally Re-Tested Again at Stancor's Lab Facilities.",
    img: tradingImg
  },
  {
    title: "Stock & Distribution",
    desc: "Stancor is the Biggest Stockholder in India having more than 25000 Metric Tones of Inventory ready to ship all over the world as per Customer Requirements",
    img: stockImg
  },
]

const OurSteel = () => {
  return (
    <div className={styles.section}>
      <div className='ccontainer'>
        <h1>Our Steel & Commodiities Business</h1>
        <div className={styles.cards}>
          {commoditiesData.map(e => (
            <div className={styles.singleCard}>
              <div className={styles.imgWrapper}>
                <Image src={e.img} alt={e.title}></Image>
              </div>
              <div className={styles.contnet}>
                <h2>{e.title}</h2>
                <p>{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurSteel