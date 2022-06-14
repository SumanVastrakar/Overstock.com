import React from 'react'


import "../../components/Navbar.css"
export default function Decor() {
  return (
    <div className='NewNavbar_box'>
    <div className='DivForMargin'>
    <div className='InsideBoxOfNewNavbarHavingText'>
     <p className='headingOfallNavbar'>Mirrors</p>
   
         <p >Sofas & Couches</p>
         <p>Sectionals</p>
         <p>Benches</p>
         <p>Ottomans & Poufs</p>
         <p>Accent Chairs</p>
         <p>Recliners</p>
         <p>Coffe & Accent Tables</p>
         <p>Tv Stands</p>
  </div>
  
  <div className='InsideBoxOfNewNavbarHavingText'>
  <p className='headingOfallNavbar'>Decorative Accessories</p>
   
   
         <p>Beds</p>
         <p>Bedroom Sets</p>
         <p>Headboards</p>
         <p>Bed Frames</p>
         <p>Dresses & Chests</p>
         <p>Nightstands</p>
         <p>Armoires & Wardrobes</p>
         <p>Mattresses</p>
         <p>kids Beds</p>
       
       
    
  </div>
  <div className='InsideBoxOfNewNavbarHavingText'>
  <p className='headingOfallNavbar'>Wall Decor</p>
   
   
        <p>Kitchen & Dining Sets</p>
        <p>Kitchen & Dining Chairs</p>
        <p>Kitchen & Dining Tables</p>
        <p>Counter & Bar Stools</p>
        <p>Bar Tables</p>
        <p>Buffets & Sideboards</p>
        <p>Home Bars</p>
        <p>Kitchen Islands & Carts</p>
        <p>Kitchen Furniture</p>
    
  </div>
  
  <div className='InsideBoxOfNewNavbar'>
      <img className="InsideBoxOfNewNavbarImg" src="https://ak1.ostkcdn.com/images/products/is/images/direct/d28cbaf23c439090fa43c0cf806ac147b7e1040f/Arched-Dressing-Mirror-Full-length-Floor-Mirror-with-Standing.jpg" alt="AllNew" />
      <p  className='my-4 headingOfallNavbar'>extra 15% Off</p>
      <p>Select Home Decor*</p>
  </div>

  <div className='InsideBoxOfNewNavbarHavingText' style={{color :"red" , fontWeight : "700"}}>
  <p style={{color :"black"}} className='headingOfallNavbar'>More Ways to Shop</p>
   <p>Featured Sale</p>
<p>New Arrivals</p>
<p>Clearance</p>
<p>Decor Advice</p>

    
  </div>
 
 
  </div>
</div>
  )
}
