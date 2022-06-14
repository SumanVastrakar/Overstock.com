import React from 'react'


import "../../components/Navbar.css"
export default function Kitchen() {
  return (
    <div className='NewNavbar_box'>
    <div className='DivForMargin'>
    <div className='InsideBoxOfNewNavbarHavingText'>
     <p className='headingOfallNavbar'>Dinnerware</p>
   
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
  <p className='headingOfallNavbar'>Serveware</p>
   
   
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
  <p className='headingOfallNavbar'>Kitchen Furniture</p>
   
   
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
      <img className="InsideBoxOfNewNavbarImg" src="https://ak1.ostkcdn.com/images/products/7508194/Hamilton-Beach-26030-Belgian-Waffle-Maker-9e4e0fb9-116d-44c4-9b97-2805b4e2519c_1000.jpg" alt="AllNew" />
      <p  className='my-4 headingOfallNavbar'>extra 15% Off</p>
      <p>Select Kitchen And Dining*</p>
  </div>

  <div className='InsideBoxOfNewNavbarHavingText' style={{color :"red" , fontWeight : "700"}}>
  <p style={{color :"black"}} className='headingOfallNavbar'>More Ways to Shop</p>
   <p>Featured Sale</p>
<p>New Arrivals</p>
<p>Clearance</p>
<p>Kitchen Advice</p>

    
  </div>
 
 
  </div>
</div>
  )
}

