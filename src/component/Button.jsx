import React from 'react'

function Button ({label, className}) {
  return (
  
    <div className={`px-4 py-3 rounded-md text-center ${className}`}>{label}</div>
   
  )
}
export default Button;