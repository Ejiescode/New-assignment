import { useState } from 'react';

function HeroSection (){
  const [IsSubscribed, setIsSubscribed] = useState(false);
  function Subscribe (){
    setIsSubscribed(true);
  }
  return (
<section className="h-screen m-auto">
<div className="text-center ">
<p className="text-[#717171] text-capitalize text-[14px]">
ALL-IN-ONE MARKETING SOFTWARE  
</p>
<h1 className="text-[62px] font-bold leading-tight">
Send emails, automate marketing,
monetize content – in one place  
</h1>
<p className="text-[18px] text-black text-center">
Grow your business and boost revenue with an easy, affordable platform that brings email,<br/>
automation, online courses and paid newsletters together.    
</p>

  
  <button onClick={Subscribe}  className="hover:border-[#00a2ff] bg-[#fbe30c] hover:bg-[#00a2ff] hover:text-white w-fit py-2 px-8 font-bold border-2 rounded-3xl border-[#fbe30c]">

{IsSubscribed ? "You are now subscribed" : "Start 30-day FREE trial"}
</button>
<p className="text-[10px] mt-1">
Try us {IsSubscribed? "premium" : "free"}   |  No credit card required  |  Cancel anytime  
</p>
</div>
</section>
  )
};
export default HeroSection;
