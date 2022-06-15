import React from 'react'
import "./HomePage.css"


export default function GotYourStyle() {
  return (
    <div>
    
      <p className='HeadingOfHomePage'>We've got Your Style</p>
      
      <div className='limitedTimeDeals'>
        <div style={{margin:"10px"}}>
        <img src="https://ak1.ostkcdn.com/img/mxc/030822-SBS-MidCenMod.jpg?imwidth=1920" alt="" />
        <p className='limitedTimeDealsText'><span style={{fontWeight:"700", fontSize:"23px"}}>Mid-Century Modern</span><span style={{fontSize:"15px"}}> <br /> Retro meets modern chic in these clean lines and <br />
        vibrant tones.</span></p>
        </div>
        <div style={{margin:"10px"}}>
        <img src="https://ak1.ostkcdn.com/img/mxc/030822-SBS-Farmhouse.jpg?imwidth=1920" alt="" />
        <p className='limitedTimeDealsText'><span style={{fontWeight:"700", fontSize:"23px"}}>Farmhouse</span><span style={{fontSize:"15px"}}> <br /> Country comfots abound in this fresh lake on rustic <br />
        home decor.</span></p>
        </div>
        <div style={{margin:"10px"}}>
        <img src="https://ak1.ostkcdn.com/img/mxc/030822-SBS-Traditional.jpg?imwidth=1920" alt="" />
        <p className='limitedTimeDealsText'><span style={{fontWeight:"700", fontSize:"23px"}}>Traditional</span><span style={{fontSize:"15px"}}> <br /> Cozy designs, clean and classic, give this style it's <br />
        signature appeal.</span></p>
        </div>
      

        
    
      </div>
    
    </div>
  )
}
