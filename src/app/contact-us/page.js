import React from 'react'
import ConatctBanner from './(components)/ContactBanner/ConatctBanner'
import ContactUs from './(components)/ContactUs/ContactUs'

export const metadata = {
  title: "Contect Us | R J Enterprise",
  description: "R J Enterprise – Your Trusted Partner in Steel Trading for Over 20 Years",
};


const page = () => {
  return (
    <div>
        <ConatctBanner/>
        <ContactUs/>
    </div>
  )
}

export default page