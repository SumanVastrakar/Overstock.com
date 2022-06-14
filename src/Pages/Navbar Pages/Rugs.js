import React from 'react'


import "../../components/Navbar.css"
export default function Rugs() {
  return (
    <div className='NewNavbar_box'>
    <div className='DivForMargin'>
    <div className='InsideBoxOfNewNavbarHavingText'>
     <p className='headingOfallNavbar'>Area Rugs By Size</p>
   
        <p>3'x5'</p>
        <p>4'x6'</p>
        <p>5'x8'</p>
        <p>7'x9'</p>

        <p>8'x10'</p>
        <p>9'x12'</p>
        <p>10'x14'</p>
      <p>Runner</p>
  </div>
  
  <div className='InsideBoxOfNewNavbarHavingText'>
  <p className='headingOfallNavbar'>Area Rugs By Color</p>
   
  <p>Grey</p>
  <p>Blue</p>
  <p>Ivory</p>
  <p>White</p>
  <p>Black</p>
  <p>Red</p>
  <p>Brown</p>
  <p>Orange</p>
  <p>Pink</p>
  
  </div>
  <div className='InsideBoxOfNewNavbarHavingText'>
  <p className='headingOfallNavbar'>Rugs By Type</p>
   <p>Area Rugs</p>
   

<p>Area Rugs</p>
<p>Outdoor Rugs</p>
<p>Rug Pads</p>
<p>One of a Kind Rugs</p>
 <p>Kids & Tweens Rugs</p>
 <p>Door Mats</p>
<p>Stair Treads </p>
 <p>Kitchen Mats & Rugs</p>
 <p>Bath Mats & Rugs </p>
    
  </div>
  
  <div className='InsideBoxOfNewNavbar'>
      <img className="InsideBoxOfNewNavbarImg" src="https://ak1.ostkcdn.com/images/products/is/images/direct/985aec892161a02a286032bacd80e61f7624915a/SAFAVIEH-Madison-Avery-Boho-Chic-Distressed-Area-Rug.jpg?imwidth=320" alt="AllNew" />
      <p  className='my-4 headingOfallNavbar'>extra 20% Off</p>
      <p>Select Area Rugs by Safavieh*</p>
  </div>

  <div className='InsideBoxOfNewNavbarHavingText' style={{color :"red" , fontWeight : "700"}}>
  <p style={{color :"black"}} className='headingOfallNavbar'>More Ways to Shop</p>
   <p>Featured Sale</p>
<p>New Arrivals</p>
<p>Clearance</p>
<p>Rugs Advice</p>

    
  </div>
 
 
  </div>
</div>
  )
}
