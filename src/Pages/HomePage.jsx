import React from 'react'

import Navbar from '../component/Navbar';
import HeroSection from '../component/HeroSection';
import Cards from '../component/Cards';
import Footer from '../component/Footer';
import Props from '../component/Props';

function HomePage() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <Props/>
       <div className="flex">
      <Cards image="https://us-rd.gr-cdn.com/700x/https://us-wd.gr-cdn.com/customers/sites/16/2024/04/1150/LogoECSPublishingGroup1-removebg-preview.png"
       paragraph="10% list growth & " br="sales spike in tough niche" second="It's nice that with Getresponse,
       we have the tools and integrations we need within our budget." text="Read case study"/>
       <Cards image="https://us-wd.gr-cdn.com/customers/sites/16/2024/07/1022/living_vision-removebg-preview-e1721125329100.png"
       paragraph="75% of all public " br="sales from email autoresponders" second="Together with Getresponse, we've been able to convince 
         customers of need, culminating in compelling sales." text="Read case study"/>
         <Cards image="https://us-wd.gr-cdn.com/customers/sites/16/2024/07/1025/red-hot-logo1_-removebg-preview-e1721125532901.png"
         paragraph="Up to $1,000 for " br="every 1,000 emails sent" second="Regarding revenue contribution, the email marketing 
      channel is like free money for us." text="Read case study"/>
       </div>
      <Footer/>
     
    </div>
  )
};
export default HomePage;
