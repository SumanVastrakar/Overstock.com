import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../../Redux/HomeGoodProducts/action';
import axios from "axios";

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


Select ,

  Image, } from '@chakra-ui/react';
import HomeGoodProductsFilter from './HomeGoodProductsFilter';
import { useSearchParams } from 'react-router-dom';
import { EmailIcon } from '@chakra-ui/icons';
import { Rating } from './HomeGoodProductItem';


export default function HomeGoodProducts() {

  const [sortValue, setSortValue] = useState("")
  const [searchParams] = useSearchParams();
  let products = useSelector(store => store.homeGoodProducts.products);



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

    //handlesort 

    
    const handleSort =  (e) => {
      let value = e.target.value;
      console.log(value)
      // setSortValue(value)
      // return await axios.get(`http://localhost:8080/HomeGoods?_sort=price&_order=${value}`)
      //   .then((response) => {
      //     console.log(response.data)
      //     if(categoryValues){
        
          // dispatch(fetchData(response.data))
  
        // })
        // .catch((error) => console.log(error))
      //   if(categoryValues){
      //     setSearchParams({category : categoryValues}, {replace : true})
      //     let params = {
      //         category : searchParams.getAll("category")
      //     }
      //     dispatch(fetchData(params))
      // }
// console.log(value)
      if( value === "asc"){
        products = products.sort(function (a, b) { return  a.price - b.price})
        console.log(products)
        products.map((product => (
          
          <ProductSimple key= {product.id} image = {product.image} title  = {product.productName} price ={product.price} rating ={product.rating} elem ={product} id={product.id} />
                
                      )))
                      console.log("fhhfuihdfudhu")

      }else {
        products = products.sort(function (a, b) { return  b.price - a.price})
        console.log(products)
        products.map((product => (
         

          <ProductSimple key= {product.id} image = {product.image} title  = {product.productName} price ={product.price} rating ={product.rating} elem ={product} id={product.id} />
                
                      )))
      }
    };

  return (
   <Box>
    <Heading as ="h1" p = "2rem 4rem">Home Goods Sale</Heading>
    <Stack display = {{md : "flex"}} flexDirection = {{md : "row"}}>
      <Box>
      <HomeGoodProductsFilter/>
      </Box>
      <Box>
        {/* <Heading as = "h1"> Home Good Products</Heading> */}
{/* ///adding button for sorting */}
{/* 
<Menu closeOnSelect={false}>
  <MenuButton as={Button} ml="83%" colorScheme='blue'>
    Sort By Price
  </MenuButton>
  <MenuList   zIndex="2000"  minWidth='240px'>
    <select defaultValue='asc' onChange={handleSort} value={sortValue} title='Order' >
      <option value='asc'>Ascending</option>
      <option value='desc'>Descending</option>
    </select>
    <MenuDivider />
  
  </MenuList>
</Menu> */}

{/* <Select width='200px'  onChange={handleSort} value={sortValue}  ml="80%" >
  <option value="Sort By">Sort By </option>
  <option value='asc'>Ascending</option>
  <option value='desc'>Descending </option>

</Select> */}




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
  console.log(image, price, title, rating, elem, id)
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
