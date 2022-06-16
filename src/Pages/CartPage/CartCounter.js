import React, {useEffect} from 'react'
import {Box} from "@chakra-ui/react"
import { useDispatch, useSelector } from 'react-redux'
import { fetchCart } from '../../Redux/Cart/action';

export default function CartCounter() {
    const cart = useSelector((store) => store.cart.cart);
    console.log(cart)
    const dispatch = useDispatch();

    useEffect(() => {
        if(cart?.length === 0){
            dispatch(fetchCart())
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
    cart?.length ? cart.length : 0
}
    </Box>
  )
}
