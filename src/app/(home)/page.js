import Image from "next/image";
import Banner from "./(components)/Banner/Banner";
import AboutUs from "./(components)/AboutUs/AboutUs";
import OurSteel from "./(components)/OurSteel/OurSteel";
import LatestPosts from "./(components)/LatestPosts/LatestPosts";
import SpecialAbilites from "./(components)/SpecialAbilites/SpecialAbilites";
import CustomerTestimonial from "./(components)/CustomerTestimonial/CustomerTestimonial";
import OurPartners from "./(components)/OurPartners/OurPartners";

export default function Home() {
  return (
  <div>
    <Banner/>
    <AboutUs/>
    <OurSteel/>
    <LatestPosts/>
    <SpecialAbilites/>
    <CustomerTestimonial/>
    <OurPartners/>
  </div>
  );
}



//https://www.stancor.in/