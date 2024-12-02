'use client'
import React from 'react'
import logo from "@/../public/images/logo.png"
import Image from 'next/image'
import Link from 'next/link'
import styles from './NavBar.module.scss'
import { useRouter } from 'next/navigation'

const data = [
  { title: "home", link: '/', class:"active"},
  { title: "Services", link: '/services' },
]

function NavBar() {

  console.log(location.pathname)

  return (
    <div className='ccontainer'>
      <div className={styles.headerSection}>
        <div className={styles.logoSection}>
          <Image src={logo} />
        </div>
        <div className={styles.linkSection}>
          {
            data.map((item) => {
              return (
                <Link
                  key={item.link}
                  href={item.link}
                  className={`${styles.navLink} ${styles[item.class]}`}
                  // className={location.pathname === item.link ? styles.active : ''}
                >
                  {item.title}
                </Link>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default NavBar