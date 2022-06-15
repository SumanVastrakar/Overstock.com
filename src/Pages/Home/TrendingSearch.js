import React from 'react'
import "./HomePage.css"
import { Button } from "@chakra-ui/react"

export default function TrendingSearches() {
  return (
    <div style={{textAlign:"center"}}>
      <Button color={"white"} bg={"rgb(45,59,69)"} >See All Styles</Button>
      <p className='HeadingOfHomePage'>Trending Searches</p>
    <div style={{ margin:"auto", width :"90%"}}>
    <div className='limitedTimeDeals'>
      <div style={{backgroundColor:"rgb(214,225,236)",width : "30%", height :"50px"}}>
       
        <p style={{fontSize:"23px", color:"rgb(45,59,69)"}}className='limitedTimeDealsText'>Outdoor Rugs</p>
        </div>
        <div style={{backgroundColor:"rgb(214,225,236)",width : "30%", height :"50px"}}>
       
       <p style={{fontSize:"23px", color:"rgb(45,59,69)"}}className='limitedTimeDealsText'>Wallpaper</p>
       </div>
       <div style={{backgroundColor:"rgb(214,225,236)",width : "30%", height :"50px"}}>
       
       <p style={{fontSize:"23px", color:"rgb(45,59,69)"}}className='limitedTimeDealsText'>Patio Furniture</p>
       </div>
       
    
      </div>

      {/* //2nd part of the fresh finds in each category */}
      <div className='limitedTimeDeals'>
      <div style={{backgroundColor:"rgb(214,225,236)",width : "30%", height :"50px"}}>
       
        <p style={{fontSize:"23px", color:"rgb(45,59,69)"}}className='limitedTimeDealsText'> Mattresses</p>
        </div>
        <div style={{backgroundColor:"rgb(214,225,236)",width : "30%", height :"50px"}}>
       
       <p style={{fontSize:"23px", color:"rgb(45,59,69)"}}className='limitedTimeDealsText'>TV Stands</p>
       </div>
       <div style={{backgroundColor:"rgb(214,225,236)",width : "30%", height :"50px"}}>
       
       <p style={{fontSize:"23px", color:"rgb(45,59,69)"}}className='limitedTimeDealsText'> Outdoor Lighting</p>
       </div>
       
    
      </div>

      <div className='limitedTimeDeals'>
      <div style={{backgroundColor:"rgb(214,225,236)",width : "30%", height :"50px"}}>
       
        <p style={{fontSize:"23px", color:"rgb(45,59,69)"}}className='limitedTimeDealsText'>Outdoor Dining Sets</p>
        </div>
        <div style={{backgroundColor:"rgb(214,225,236)",width : "30%", height :"50px"}}>
       
       <p style={{fontSize:"23px", color:"rgb(45,59,69)"}}className='limitedTimeDealsText'> Mirrors</p>
       </div>
       <div style={{backgroundColor:"rgb(214,225,236)",width : "30%", height :"50px"}}>
       
       <p style={{fontSize:"23px", color:"rgb(45,59,69)"}}className='limitedTimeDealsText'> Portable Air Conditioners</p>
       </div>
       
    
      </div>

      <div className='limitedTimeDeals'>
      <div style={{backgroundColor:"rgb(214,225,236)",width : "30%", height :"50px"}}>
       
        <p style={{fontSize:"23px", color:"rgb(45,59,69)"}}className='limitedTimeDealsText'>Bathroom Vanities</p>
        </div>
        <div style={{backgroundColor:"rgb(214,225,236)",width : "30%", height :"50px"}}>
       
       <p style={{fontSize:"23px", color:"rgb(45,59,69)"}}className='limitedTimeDealsText'> Computer Desks</p>
       </div>
       <div style={{backgroundColor:"rgb(214,225,236)",width : "30%", height :"50px"}}>
       
       <p style={{fontSize:"23px", color:"rgb(45,59,69)"}}className='limitedTimeDealsText'> Area Rugs</p>
       </div>
       
    
      </div>
    </div>
      <hr />
    </div>
  )
}
