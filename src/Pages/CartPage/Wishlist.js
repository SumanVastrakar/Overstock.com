import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCart, fetchWishlist } from '../../Redux/Cart/action';
import {  DeleteIcon} from '@chakra-ui/icons';
import {
    Box, Badge,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useColorModeValue,
    List,
    ListItem,
    ListIcon,
} from "@chakra-ui/react"
import { CheckIcon } from '@chakra-ui/icons';
import { Link } from "react-router-dom"
import { BsCart } from "react-icons/bs";
import { addProductCart } from '../../Redux/Cart/action';
import { delteProductWishlist } from '../../Redux/Cart/action';


export default function WishList() {
   
    const dispatch = useDispatch();
    const newWishlist = useSelector(store => store.cart.wishlist);
    const user = useSelector(store => store.auth.user)


    let wishlist = [];
    for( let i = 0; i < newWishlist.length; i++){
 
      if(newWishlist[i].token === user[1]){
        wishlist.push(newWishlist[i])
      }
    }
    console.log(wishlist)
   
  
    useEffect(() => {
    dispatch(fetchWishlist())
    },[])
  
   

  
    return (
        <Box>
            <Heading as={"h1"} textAlign={"center"}>Wishlist Page</Heading>

            <Box width="90%" margin="auto" display={'flex'}>

                <Box width={"100%"}  >
                    {
                        wishlist.map((elem) => (
                            <CardsOfDetailsOfCart name={elem.product.productName} image={elem.product.image} price={elem.product.price} category={elem.product.category} elem = {elem} />
                        ))
                    }
                    {/* //for keeping the products */}

                </Box>

            </Box>
        </Box>
    )
}

function CardsOfDetailsOfCart({ name, image, price, category, elem }) {
    const dispatch = useDispatch();
    const user = useSelector(store => store.auth.user)
    

    const cart = useSelector(store => store.cart.cart);
    const addToCartHandler = (elem) => {
        for( let i = 0; i < cart.length; i++){
                if(elem.product.id == cart[i].product.id){
                  alert("Item already exist in the cart")
                
                  return;
                }
            }
        dispatch(addProductCart(elem.product, user[1]))
        dispatch(delteProductWishlist(elem.id))

    }
    const removeWishListItemHandler = (id) => {
        dispatch(delteProductWishlist(id))
    }

    return (
        <Center py={8}>
            <Stack
                borderWidth="1px"
                borderRadius="lg"
                w={{ sm: '100%', md: '540px' }}
                height={{ sm: '476px', md: '20rem' }}
                direction={{ base: 'column', md: 'row' }}
                bg={"white"}
                boxShadow={'2xl'}
                padding={4}>
                <Flex flex={1} bg="blue.200">
                    <Image
                        objectFit="cover"
                        boxSize="100%"
                        src={image}
                    />
                </Flex>
                <Stack
                    flex={1}
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    p={1}
                    pt={2}>
                    <Heading fontSize={'2xl'} fontFamily={'body'}>
                        {name}
                    </Heading>
                    <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
                        ₹ {price}
                    </Text>



                    <Button
                        // flex={1}
                        fontSize={'sm'}
                        // rounded={'full'}
                        height="40px"
                        bg={'green.400'}
                        color={'white'}
                        boxShadow={
                            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                        }
                        _hover={{
                            bg: 'blue.500',
                        }}
                        _focus={{
                            bg: 'blue.500',
                        }}
                        onClick = {()=>addToCartHandler(elem)}
                        >
                        Add To Cart        <BsCart margin={"10px"} fontSize="1.5rem" />
                    </Button>

                    
            <Button
                // flex={1}
                fontSize={'sm'}
                // rounded={'full'}
                height = "40px"
                bg={'red.400'}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: 'blue.500',
                }}
                _focus={{
                  bg: 'blue.500',
                }}
                onClick={() => {removeWishListItemHandler(elem.id)}}
                >
                Remove from Wishlist <DeleteIcon margin={"6px"}/>
              </Button>
                </Stack>
            </Stack>
        </Center>
    );
}


export { CardsOfDetailsOfCart }
