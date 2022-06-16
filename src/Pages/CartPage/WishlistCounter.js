import React, {useEffect} from 'react'
import {Box} from "@chakra-ui/react"
import { useDispatch, useSelector } from 'react-redux'
import { fetchCart, fetchWishlist } from '../../Redux/Cart/action';

export default function WishlistCounter() {
    const dispatch = useDispatch();
    const wishlist = useSelector(store => store.cart.wishlist);


    useEffect(() => {
        if(wishlist?.length === 0){
            dispatch(fetchWishlist())
        }
    },[])
  return (
    <Box 
    backgroundColor = "black"
    borderRadius="50%"
    width = "20px"
    height = "20px"
    right = "0"
    zIndex = "100"
    top = "-1.5"
    textAlign="center"
    position = "absolute"
    textColor={"white"} >
      
  
{
    wishlist?.length ? wishlist.length : 0
}
    </Box>
  )
}
