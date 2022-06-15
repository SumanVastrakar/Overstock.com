import React from 'react'
import "./HomePage.css"

export default function SummerReady() {
  return (
    <div>
      <img style={{margin : "auto", width : "90%",  cursor:"pointer"}} src="https://i.imgur.com/i8Br4Rh.png" alt="" />
      <p className='HeadingOfHomePage'>Fresh Finds In Each Category</p>
    <div style={{ margin:"auto", width :"90%"}}>
    <div className='limitedTimeDeals'>
      <div>
        <img src="https://ak1.ostkcdn.com/img/mxc/11192021-CatSilo-Furniture.png?imwidth=1920" alt="" />
        <p className='limitedTimeDealsText'>Furniture</p>
        </div>
        <div>
        <img src="https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-AreaRugs.png?imwidth=1920" alt="" />
        <p className='limitedTimeDealsText'>Area Rugs</p>
        </div>
        <div>
        <img src="https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-BedBath.png?imwidth=1920" alt="" />
        <p className='limitedTimeDealsText'>Bedding</p>
        </div>
        <div>
        <img src="https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Decor.png?imwidth=1920" alt="" />
        <p className='limitedTimeDealsText'>Home Decor</p>
        </div>
        <div>
        <img src="https://ak1.ostkcdn.com/img/mxc/CatSilo-Window-040721.jpg?imwidth=1920" alt="" />
        <p className='limitedTimeDealsText'>Window Treatments</p>
        </div>
        <div>
        <img src="https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Kitchen.png?imwidth=1920" alt="" />
        <p className='limitedTimeDealsText'>Kitchen</p>
        </div>
        
    
      </div>

      {/* //2nd part of the fresh finds in each category */}
      <div className='limitedTimeDeals'>
      <div>
        <img src="https://ak1.ostkcdn.com/img/mxc/11192021-CatSilo-Outdoor.png?imwidth=1920" alt="" />
        <p className='limitedTimeDealsText'>Outdoor</p>
        </div>
        <div>
        <img src="https://ak1.ostkcdn.com/img/mxc/01112021-CatSilo-HomeImp.jpg?imwidth=1920" alt="" />
        <p className='limitedTimeDealsText'>Home Improvement</p>
        </div>
        <div>
        <img src="https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Storage.png?imwidth=1920" alt="" />
        <p className='limitedTimeDealsText'>Storage</p>
        </div>
        <div>
        <img src="https://ak1.ostkcdn.com/img/mxc/01112021-CatSilo-Mattresses.jpg?imwidth=1920" alt="" />
        <p className='limitedTimeDealsText'>Mattresses</p>
        </div>
        <div>
        <img src="https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Lighting.png?imwidth=1920" alt="" />
        <p className='limitedTimeDealsText'>Lighting</p>
        </div>
        <div>
        <img src="https://ak1.ostkcdn.com/img/mxc/CatSilo-AllDeals-040721.jpg?imwidth=1920" alt="" />
        <p className='limitedTimeDealsText'>Shop All Deals</p>
        </div>
        
    
      </div>
    </div>
      
    </div>
  )
}
