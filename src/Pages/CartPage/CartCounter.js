import React, {useEffect} from 'react'
import {Box} from "@chakra-ui/react"
import { useDispatch, useSelector } from 'react-redux'
import { fetchCart } from '../../Redux/Cart/action';

export default function CartCounter() {

    const dispatch = useDispatch();
    
  const user = useSelector(store => store.auth.user)

    const newCart = useSelector(store => store.cart.cart);
    console.log("newCart",newCart);


    let cart = [];
    for( let i = 0; i < newCart.length; i++){
 
      if(newCart[i].token === user[1]){
        cart.push(newCart[i])
      }
    }


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
