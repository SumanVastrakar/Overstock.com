import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCart } from '../../Redux/Cart/action';
import { emptyCart } from '../../Redux/Cart/action';
import {Box, Badge,
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
import { CheckIcon, DeleteIcon} from '@chakra-ui/icons';
import { delteProductCart } from '../../Redux/Cart/action';
import {Link} from "react-router-dom"
let totalPrice = 0 ;
let total = 0;
export default function Cart() {

  const user = useSelector(store => store.auth.user)
  // console.log("user",user)
  // console.log("hello user",user[0], "token", user[1]);
  
    const dispatch = useDispatch();
    const newCart = useSelector(store => store.cart.cart);
    console.log("newCart",newCart);


    let cart = [];
    for( let i = 0; i < newCart.length; i++){
 
      if(newCart[i].token === user[1]){
        cart.push(newCart[i])
      }
    }

    console.log("cart page seperate of each user", cart)
   
  
    useEffect(() => {
    dispatch(fetchCart())
    },[])
  return (
    <Box>
<Heading as={"h1"} textAlign={"center"}>Cart Page</Heading>
  
<Box width = "90%" margin = "auto" display={'flex'}>
 
<Box width={"70%"}  >
    {
        cart.map((elem) => (
            <CardsOfDetailsOfCart name = {elem.product.productName} id={elem.product.id} image = {elem.product.image} price = {elem.product.price} category = {elem.product.category} elem = {elem}/>
        ))
    }
    {/* //for keeping the roducts */}
   
</Box>
<Box margin={"20px"}>
    {/* //for calculating the total price of the items  */}
    <Pricing/>
</Box>
</Box>
</Box>
  )
}

 function CardsOfDetailsOfCart({name, image, price, category, id, elem}) {
    const [count, setCount] = useState(1)
    totalPrice += count * price
   total = totalPrice.toFixed(2);
   const dispatch = useDispatch();

   const removeCartItemHandler = (id) => {
   
   dispatch(delteProductCart(id))
   }

    const incrementHandle = () => {
        setCount(count + 1)
        totalPrice += count * price

    }
    const decrementHandle = () => {
        if(count > 0){

            setCount(count - 1)
            totalPrice += count * price
        }
    }

    return (
      <Center py={6}>
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
        
  
            <Stack
              width={'100%'}
              mt={'2rem'}
              direction={'row'}
              padding={2}
              justifyContent={'space-between'}
              alignItems={'center'}>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                _focus={{
                  bg: 'gray.200',
                }}
                onClick={decrementHandle}
                >
                 -1
              </Button>
              <h1>{count}</h1>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'blue.400'}
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
                onClick={incrementHandle}
                >
                +1
              </Button>
            </Stack>
           
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
                onClick={() => {removeCartItemHandler(elem.id)}}
                >
                Remove <DeleteIcon margin={"6px"}/>
              </Button>
          </Stack>
        </Stack>
      </Center>
    );
  }


  ///for total price of the product

   function Pricing() {
    const cart = useSelector(store => store.cart.cart);
    const dispatch = useDispatch();
    const emptyCartHandler = (cart) => {
        console.log("empty cart",cart)
dispatch(emptyCart(cart))
    }
    return (
      <Center py={6}>
        <Box
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Stack
            textAlign={'center'}
            p={6}
            color={useColorModeValue('gray.800', 'white')}
            align={'center'}>
            <Text
              fontSize={'sm'}
              fontWeight={500}
              bg={useColorModeValue('green.50', 'green.900')}
              p={2}
              px={3}
              color={'green.500'}
              rounded={'full'}>
              Your Cart Total
            </Text>
            <Stack direction={'row'} align={'center'} justify={'center'}>
              <Text fontSize={'3xl'}>₹</Text>
              <Text fontSize={'6xl'} fontWeight={800}>
              {total}
              </Text>
            
            </Stack>
          </Stack>
  
          <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                You saved <span  color={'red.500'}> ₹ 1212.14
                    </span> on this order!
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
               {`You have Total (${cart.length}) Item in Your cart`}
              </ListItem>
              
            </List>
            <Link to="/checkout">
            <Button
              mt={10}
              w={'full'}
              bg={'green.400'}
              color={'white'}
              rounded={'xl'}
              boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
              _hover={{
                bg: 'green.500',
              }}
              _focus={{
                bg: 'green.500',
              }}
              onClick={() => emptyCartHandler(cart)}
              >
              Checkout Now
            </Button>
            </Link>
        
          </Box>
        </Box>
      </Center>
    );
  }
  export {CardsOfDetailsOfCart, Pricing}
