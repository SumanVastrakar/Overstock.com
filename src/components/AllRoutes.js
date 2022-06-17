import React from 'react'
import { Route, Routes  } from 'react-router-dom'
import Cart from '../Pages/CartPage/Cart'
import WishList from '../Pages/CartPage/Wishlist'
import Checkout from '../Pages/Checkout/Checkout'
import ThankYou from '../Pages/ThankYou/ThankYou'
import Login from './Authentication/Login'
import Register from './Authentication/Register'
import DatalighItems from './Datalights/DatalightItems'
import DatalightProducts from './Datalights/DatalightProducts'
import Home from './Home'
import HomeGoodProductItem from './HomeGoodSales/HomeGoodProductItem'
import HomeGoodProducts from './HomeGoodSales/HomeGoodProducts'
import Jweleryitem from './Jwelery/JweleryItem'
import JweleryProducts from './Jwelery/JweleryProducts'


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
        <Route path="/datalightsproducts" element={<DatalightProducts/>}/>
        <Route path="/datalightsproducts/:id" element={<DatalighItems/>}/>
        <Route path="/jweleryproducts" element={<JweleryProducts/>}/>
        <Route path="/jweleryproducts/:id" element={<Jweleryitem/>}/>
      
      </Routes>
    </div>
  )
}
