import React from 'react'
import BottomSection from './(components)/BottomSection/BottomSection'
import ServicesBanner from './(components)/ServicesBanner/ServicesBanner'

export const metadata = {
  title: "Services | R J Enterprise",
  description: "R J Enterprise – Your Trusted Partner in Steel Trading for Over 20 Years",
};


const page = () => {
  return (
    <div>
      <ServicesBanner/>
      <BottomSection/>
    </div>
  )
}

export default page