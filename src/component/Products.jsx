import React, { useState, useEffect } from 'react'
import Button from './Button';
import axios from 'axios';

function Products ()  {
    const [products, setProducts] = useState([]);
    useEffect (() =>{
    async function fetchPost () {
        try{
            const response = await axios ("https://dummyjson.com/products");
            setProducts(response.data.products);
        }catch (error) {
            console.log("error", error)
        }
    }
  fetchPost();

    },[]);
  return (
   <>
    {products.map ((p, index)=>(
<div key={index} className="bg-white w-[350px] p-5 shadow-lg h-fit rounded-xl ">
    <div className="w-full relative p-12">
        <div className="bg-purple-200 text-black left-0 top-0 absolute w-fit px-2 py-1 font-semibold">
            {p.availabilityStatus}</div>
        <img className="size-[200px] m-auto" src={p.images[0]} alt="" />
    </div>
    <div className="flex flex-col">
        <h3 className="font-bold mt-2 mb-3 text-2xl ">{p.title}</h3>
        <p>{p.brand}</p>
        <small className="text-sm text-gray-500">Shipped in 3-4 days</small>
        <b className="font-bold text-md">${p.price}</b>
        </div>
        <div className="flex gap-3" >
        <Button label="Add Cart"  className="bg-gray-200 w-full text-gray-400 font-light " />
        <Button label="Buy" className="bg-purple-400 w-full text-white "/>
    
        </div>

    </div>
    ))  } 
</> 
  )
}
export default Products;