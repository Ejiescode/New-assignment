import React, { useEffect } from 'react'
import Button from './Button';
import productImage from '../assets/headphone.png';

function Products ()  {
    useEffect (() =>{
fetch("https://dummyjson.com/products")
.then((response)=>response.json())
.then((data)=>console.log(data))
.catch((error)=>console.error("error", error));
    },[]);
  return (
    
   <div className="bg-white w-[350px] p-5 shadow-lg h-fit rounded-xl ">
    <div className="w-full relative p-12">
        <div className="bg-purple-200 text-black left-0 top-0 absolute w-fit px-2 py-1 font-semibold">Nearest Seller</div>
        <img className="size-[200px] m-auto" src={productImage} alt="" />
    </div>
    <div className="flex flex-col">
        <h3 className="font-bold mt-2 mb-3 text-2xl ">Wireless bluetooth headset</h3>
        <small className="text-sm text-gray-500">Shipped in 3-4 days</small>
        <b className="font-bold text-md">$35.99</b>
        </div>
        <div className="flex gap-3" >
        <Button label="Add Cart"  className="bg-gray-200 w-full text-gray-400 font-light " />
        <Button label="Buy" className="bg-purple-400 w-full text-white "/>
    
        </div>

    </div>  

  )
}
export default Products;