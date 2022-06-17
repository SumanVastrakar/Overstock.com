import React, {useEffect} from 'react'
import {Box} from "@chakra-ui/react"
import { useDispatch, useSelector } from 'react-redux'
import { fetchCart, fetchWishlist } from '../../Redux/Cart/action';

export default function WishlistCounter() {
    const dispatch = useDispatch();
    const newWishlist = useSelector(store => store.cart.wishlist);
    const user = useSelector(store => store.auth.user)


    let wishlist = [];
    for( let i = 0; i < newWishlist.length; i++){
 
      if(newWishlist[i].token === user[1]){
        wishlist.push(newWishlist[i])
      }
    }


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
