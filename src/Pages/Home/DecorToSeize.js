import React from 'react'
import "./HomePage.css"

export default function DecorToSeize() {
  return (
    <div>
      <img style={{margin : "auto", width : "90%", cursor:"pointer"}} src="https://i.imgur.com/gn5SEdK.png" alt="" />
      <p className='HeadingOfHomePage'>Overstock Featured Brands</p>
      
      <div className='limitedTimeDeals'>
        <div style={{margin:"10px"}}>
        <img src="https://ak1.ostkcdn.com/img/mxc/C-Mod_HP_C_Mod_27037529.jpg?imwidth=1920" alt="" />
        <p className='limitedTimeDealsText'><span style={{fontWeight:"700"}}>Extra 20% off</span> <br /> Select Rugs by <br /> Artistic Weavers & More*</p>
        </div>
        <div style={{margin:"10px"}}>
        <img src="https://ak1.ostkcdn.com/img/mxc/HP_C_Mod_30806359.jpg?imwidth=1920" alt="" />
        <p className='limitedTimeDealsText'><span style={{fontWeight:"700"}}>Save On</span> <br /> Select Furniture by <br /> Middlebrook Designs</p>
        </div>
        <div style={{margin:"10px"}}>
        <img src="https://ak1.ostkcdn.com/img/mxc/C-Mod_HP_C_Mod_39032511.jpg?imwidth=1920" alt="" />
        <p className='limitedTimeDealsText'><span style={{fontWeight:"700"}}>Extra 15% off</span> <br /> Select Mattresses by <br /> Sealy*</p>
        </div>
        <div style={{margin:"10px"}}>
        <img src="https://ak1.ostkcdn.com/img/mxc/C-Mod_HP_C_Mod_27417542.jpg?imwidth=1920" alt="" />
        <p className='limitedTimeDealsText'><span style={{fontWeight:"700"}}>Save On</span> <br /> Select Home Goods by<br /> Bush Furniture</p>
        </div>
       
      </div>
      <div className='limitedTimeDeals'>
      <div>
        <img src="https://i.imgur.com/akqlxvG.png" alt="" />
        
        </div>
        
      </div>
    </div>
  )
}
