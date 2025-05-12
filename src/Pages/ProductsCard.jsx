import React from 'react'
import productImage from '../assets/headphone.png';
import Button from '../component/Button';
import Products from '../component/Products';



function ProductsCard () {
  return (
<section className="p-[50px] bg-gradient-to-r from-green-400 via-blue-400 to-red-600 h-fit flex gap-3 flex-wrap">
  <Products/>  
 
 </section>
  )
}
export default ProductsCard;