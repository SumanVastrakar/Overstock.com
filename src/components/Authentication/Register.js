import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,

  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { useNavigate } from 'react-router-dom';
  import {Link} from "react-router-dom"
  
  export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const[form, setForm] = useState({
        name : "",
        email : "",
        password : "",
        username :"",
        mobile : "",
        description : "",
      })

    //on change function 
    const handleChange = (e) => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name] : value,
        })
console.log(form)
    }

    //handleSubmit function 
    const submitHandle = (e) => {
        e.preventDefault();
        const payload = {
         name : form.name,
         email : form.email,
         password : form.password,
         username :form.username,
         mobile : form.mobile,
         description : form.description,
 
        }
        fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
         method : "POST",
         headers : {
           "content-type" : "application/json"
         },
         body : JSON.stringify(payload),
        }).then(res => res.json()).then(data => {
         console.log("response",data)
         if(data.error == false){
           navigate("/login", {replace:true})
         }else {
           alert("User Already Exist")
         }
        })
 
     }
 
  
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text"  value ={form.name} name="name" onChange={handleChange}  />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" value ={form.email} name="email" onChange={handleChange} />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} value ={form.password} name="password" onChange={handleChange}  />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Username</FormLabel>
                <Input type="text"  value ={form.username} name="username"  onChange={handleChange} />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Mobile No.</FormLabel>
                <Input type="number"  value ={form.mobile} name="mobile" onChange={handleChange} />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>What would you like to shop for?</FormLabel>
                <Input type="text"  value ={form.description} name="description" onChange={handleChange} />
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }} 
                   onClick={submitHandle}
                   >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
              <Link to="/login">
              <HStack textAlign={'center'} >
                <Text align={'center'}>
                  Already a user? 
                  </Text>
                  <Text color={'blue.400'}>Login</Text>              
                </HStack>
                </Link>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }