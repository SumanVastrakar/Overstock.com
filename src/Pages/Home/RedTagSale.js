import React from 'react'
import "./HomePage.css"
import {Link} from "react-router-dom";

export default function RedTagSale() {
  return (
    <div>
        <Link to="/homeGoodPoducts">
        <img style={{margin : "auto", width : "90%", cursor:"pointer"}} src="https://i.imgur.com/imQdSdK.png" alt="" />
        </Link>
     
      <p className='HeadingOfHomePage'>Limited-Time Deals</p>
      
      <div className='limitedTimeDeals'>
        <div>
        <img src="https://ak1.ostkcdn.com/img/mxc/05302022_HB_DOMESTIC_1_20_off.svg?imwidth=1920" alt="" />
        <p className='limitedTimeDealsText'>Select Rugs</p>
        </div>
        <div>
        <img src="https://ak1.ostkcdn.com/img/mxc/06062022_HB_DOMESTIC_2_pt_3.svg?imwidth=1920" alt="" />
        <p className='limitedTimeDealsText'>Select Living Room <br /> Furniture</p>
        </div>
        <div>
        <img src="https://ak1.ostkcdn.com/img/mxc/06062022_HB_DOMESTIC_3_pt_3.svg?imwidth=1920" alt="" />
        <p className='limitedTimeDealsText'>Select Dining Room <br /> Furniture</p>
        </div>
        <div>
        <img src="https://ak1.ostkcdn.com/img/mxc/06102022_HB_DOMESTIC_6.svg?imwidth=1920" alt="" />
        <p className='limitedTimeDealsText'>Select Lighting & Ceiling <br /> Fans</p>
        </div>
        <div>
        <img src="https://ak1.ostkcdn.com/img/mxc/06062022_HB_DOMESTIC_5_pt_3.svg?imwidth=1920" alt="" />
        <p className='limitedTimeDealsText'>Select Home Decor</p>
        </div>
        <div>
        <img src="https://ak1.ostkcdn.com/img/mxc/05302022_HB_DOMESTIC_6.svg?imwidth=1920" alt="" />
        <p className='limitedTimeDealsText'>Save Top-Rated Items</p>
        </div>
        
    
      </div>
    </div>
  )
}
