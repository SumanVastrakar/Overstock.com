import React from 'react'
import { Route, Routes  } from 'react-router-dom'
import Cart from '../Pages/CartPage/Cart'
import Checkout from '../Pages/Checkout/Checkout'
import ThankYou from '../Pages/ThankYou/ThankYou'
import Home from './Home'
import HomeGoodProductItem from './HomeGoodSales/HomeGoodProductItem'
import HomeGoodProducts from './HomeGoodSales/HomeGoodProducts'


export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/homeGoodPoducts" element={<HomeGoodProducts/>}/>
        <Route path="/homeGoodPoducts/:id" element={<HomeGoodProductItem/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/thankyou" element={<ThankYou/>}/>
      
      </Routes>
    </div>
  )
}
