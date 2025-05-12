import React from 'react'
import { BiRadio } from 'react-icons/bi';

function Cards ({image, paragraph, br, second, text}) {
  return (
  <section className="flex justify-between m-auto ">
    <div className="w-[30vw] bg-white rounded-xl h-[80vh] m-[20px] py-5  border-4 hover:border-[#00a2ff]">
    <img className="h-[60px] w-[70px] ml-10" src={image} alt="pic" />
    <p className="px-10 text-[#00a2ff] font-bold text-3xl">{paragraph}</p>
    <p className="font-bold text-3xl text-black px-10">{br}</p>
    <p className="px-10 py-5 font-semibold text-black text-[20px]">{second}</p>
    <button className="text-white ml-10 mt-7 px-6 hover:bg-[#fbe30c] hover:text-black bg-[#00a2ff] 
     py-3 border-spacing-2 rounded-2xl text-[10px] text-xl  flex items-center">{text}</button>
    </div>
  </section>
  )
}
export default Cards;