import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// import { fetchData } from '../../Redux/DatalighProduct/action';
import { fetchData } from '../../Redux/JweleryProducts/action';
import { BiUser, BiHeart } from "react-icons/bi";
import {Link} from "react-router-dom"
import { addProductWishlist } from '../../Redux/Cart/action';
import { FcLike } from "react-icons/fc";
import {  Stack, Heading, Box,
  Center,
  useColorModeValue,
  Flex,
  Text,
  IconButton ,
Button,
  Image, } from '@chakra-ui/react';

import { useSearchParams } from 'react-router-dom';
import { EmailIcon } from '@chakra-ui/icons';
// import { Rating } from './DatalightItems';
import { Rating } from './JweleryItem';
// import DataLightsFilter from './DataLightsFilter';
import JweleryFilter from './JweleryFilter';


export default function JweleryProducts() {

  const [searchParams] = useSearchParams();
  const products = useSelector(store => store.jwelery.products);



  const dispatch = useDispatch()
  console.log(products);

  useEffect(() =>{
    if(products?.length === 0){
      let params = {
        category : searchParams.getAll("category"),
      }
      dispatch(fetchData(params))
    }

  },[dispatch, products?.length, searchParams])
  return (
   <Box>
    <Heading as ="h1" p = "2rem 4rem">Jwelery Sale</Heading>
    <Stack display = {{md : "flex"}} flexDirection = {{md : "row"}}>
      <Box>
     <JweleryFilter/>
      </Box>
      <Box>
        {/* <Heading as = "h1"> Home Good Products</Heading> */}
        <Flex flexWrap="wrap" justifyContent = "space-around">
          {
            products.map((product => (
          
<ProductSimple key= {product.id} image = {product.image} title  = {product.productName} price ={product.price} rating ={product.rating} elem ={product} id={product.id} />
          
                
          
          
            )))
          }
        </Flex>
  
      </Box>
    </Stack>

   </Box>
  )
}
function ProductSimple({image, price, title, rating, elem, id}) {
    const user = useSelector(store => store.auth.user)
    const dispatch = useDispatch();
  let heart = false;
  const newWishlist = useSelector(store => store.cart.wishlist);
    let wishlist = [];
    for( let i = 0; i < newWishlist.length; i++){
  
      if(newWishlist[i].token === user[1]){
        wishlist.push(newWishlist[i])
      }
    }
  
  
    for( let i = 0; i < wishlist.length; i++){
      if(wishlist[i].product.id == id){
     heart = true;
        break;
      }else {
        heart = false;
      }
    }
    
  
    const addToWishlist = (elem, token) =>{
  dispatch(addProductWishlist(elem, token))
    }
    return (
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${image})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
                <Link to ={`/jweleryproducts/${id}`}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={image}
            />
            </Link>
          </Box>
          <Stack pt={10} >
            <Text color={'white'} p = "2px" fontWeight="500" bg="red" border={"2px solid red"} textAlign="center" fontSize={'lg'} textTransform={'lowecase'}>
              {`sale ends in  ${ Math.floor(Math.random() * (3 - 1) + 1)}day ${ Math.floor(Math.random() * (23 - 2) + 2)}hrs`}
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              {title}
            </Heading>
            
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
              ₹ {price}
              </Text>
              <Text textDecoration={'line-through'} color={'gray.600'}>
              ₹600000
              </Text>
              
            </Stack>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
              <Rating rating={rating}/>
              </Text>
              <Text mr ="2px"  color={'gray.600'}>
            {
           Math.floor(Math.random() * (1000 - 200) + 200)
            }
     
              </Text>
              <Text>
              Reviews
            </Text>
              
            </Stack>
           
            <Button onClick={ () => addToWishlist(elem, user[1])} colorScheme='red' variant='outline'>
      Add To WishList    {heart == false ? <BiHeart marginLeft="20px" fontSize={"23px"} /> : <FcLike marginLeft="20px" fontSize={"23px"}/>} 
    </Button>
  
          </Stack>
        </Box>
      </Center>
    );
  }
  
  
  export {ProductSimple};
  