import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../../Redux/HomeGoodProducts/action';
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
import HomeGoodProductsFilter from './HomeGoodProductsFilter';
import { useSearchParams } from 'react-router-dom';
import { EmailIcon } from '@chakra-ui/icons';
import { Rating } from './HomeGoodProductItem';


export default function HomeGoodProducts() {

  const [searchParams] = useSearchParams();
  const products = useSelector(store => store.homeGoodProducts.products);

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
    <Heading as ="h1" p = "2rem 4rem">Home Goods Sale</Heading>
    <Stack display = {{md : "flex"}} flexDirection = {{md : "row"}}>
      <Box>
      <HomeGoodProductsFilter/>
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
  const dispatch = useDispatch();
let heart = false;
  const wishlist = useSelector(store => store.cart.wishlist);
  for( let i = 0; i < wishlist.length; i++){
    if(wishlist[i].id == id){
   heart = true;
      break;
    }else {
      heart = false;
    }
  }
  

  const addToWishlist = (elem) =>{
dispatch(addProductWishlist(elem))
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
              <Link to ={`/homeGoodPoducts/${id}`}>
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
          <Text color={'white'} p = "2px" fontWeight="500" bg="red" border={"2px solid red"} fontSize={'lg'} textTransform={'uppercase'}>
            sale ends in 2days 3hrs
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
         
          <Button onClick={ () => addToWishlist(elem)} colorScheme='red' variant='outline'>
    Add To WishList    {heart == false ? <BiHeart marginLeft="20px" fontSize={"23px"} /> : <FcLike marginLeft="20px" fontSize={"23px"}/>} 
  </Button>

        </Stack>
      </Box>
    </Center>
  );
}


export {ProductSimple};
