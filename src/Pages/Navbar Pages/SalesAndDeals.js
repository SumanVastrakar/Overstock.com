import React from 'react'


import "../../components/Navbar.css"
export default function SalesAndDeals() {
  return (
    <div className='NewNavbar_box'>
  
 <div className='DivForMargin1'>
<div style={{display : "flex", background:"rgb(214,225,236)", justifyContent:"space-evenly"}}>
<p style={{fontSize: "50px", color : "rgb(255,31,44)", fontWeight:"700"}}> Sales & deals</p>
<p style={{fontSize: "30px", color : "black", fontWeight:"500", marginLeft : "30px", marginTop:"10px"}}>shop. save. love. repeat.</p>
<button style = {{width : "150px", background:"white", color:"black", height :" 45px", marginTop : "10px", borderRadius:"10px"}}>Shop Now</button>
</div>

  


<div style={{display:"flex"}}>
  <div className='InsideBoxOfNewNavbar'>
      <img className="InsideBoxOfNewNavbarImg1"  src="https://ak1.ostkcdn.com/img/mxc/05302022_TNFlyout.svg?imwidth=320" alt="AllNew" />
      
      <p>find the red tag <br /> for Extra Savings</p>
  </div>
    
  <div className='InsideBoxOfNewNavbar'>
      <img className="InsideBoxOfNewNavbarImg1" src="https://ak1.ostkcdn.com/images/products/is/images/direct/38915c6606583747c37da0cb35077a0939694ebf/SAFAVIEH-Outdoor-Vernon-Rocking-Chair-with-Cushion.jpg?imwidth=320" alt="AllNew" />

   <p>Extra 15% off <br /> Select Outdoor Seating*</p>
  </div>

  
  <div className='InsideBoxOfNewNavbar'>
      <img className="InsideBoxOfNewNavbarImg1" src="https://ak1.ostkcdn.com/images/products/is/images/direct/54eae55baa8337876ac98be216c1e98f5ae51c3d/Corten-Steel-Series-Long-Box-Planter.jpg?imwidth=320" alt="AllNew" />
      <p>Extra 15% off <br /> Select Outdoor Decor*</p>
  </div>

  
  <div className='InsideBoxOfNewNavbar'>
      <img className=" InsideBoxOfNewNavbarImg1" src="https://ak1.ostkcdn.com/images/products/16292410/Hamilton-Beach-FlexBrew-2-Way-Coffee-Maker-6e5eaeef-6c83-4424-8fa1-a325caa4e88d_1000.jpg?imwidth=320" alt="AllNew" />
      <p>save on <br />
        Father's Day Gifts</p>
  </div>

  </div>
 
 
  </div>
</div>
  )
}
