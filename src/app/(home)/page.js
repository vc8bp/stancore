import Image from "next/image";
import Banner from "./(components)/Banner/Banner";
import AboutUs from "./(components)/AboutUs/AboutUs";
import OurSteel from "./(components)/OurSteel/OurSteel";
import SpecialAbilites from "./(components)/SpecialAbilites/SpecialAbilites";
import OurPartners from "./(components)/OurPartners/OurPartners";

export default function Home() {
  return (
  <div>
    <Banner/>
    <AboutUs/>
    <OurSteel/>
    <SpecialAbilites/>
    <OurPartners/>
  </div>
  );
}
