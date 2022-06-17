import React from 'react'
import { Route, Routes  } from 'react-router-dom'
import Cart from '../Pages/CartPage/Cart'
import WishList from '../Pages/CartPage/Wishlist'
import Checkout from '../Pages/Checkout/Checkout'
import ThankYou from '../Pages/ThankYou/ThankYou'
import Login from './Authentication/Login'
import Register from './Authentication/Register'
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
        <Route path="/wishlist" element={<WishList/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/thankyou" element={<ThankYou/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      
      </Routes>
    </div>
  )
}
