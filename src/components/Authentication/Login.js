import React from 'react'
import { useState, useEffect } from 'react'
import {useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { loginSuccess } from '../../Redux/Auth/action'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { store } from '../../Redux/store'

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector(store => store.auth.user)
    console.log(store.getState())
    console.log(users)
    const [form, setForm] = useState({

        password: "",
        username: "",

    })
    const submitHandle = (e) => {
        e.preventDefault();
        const payload = {

            password: form.password,
            username: form.username,


        }
        fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(payload),
        }).then(res => res.json()).then(data => {
            console.log(data)
            if(data.token != null) {
                dispatch(loginSuccess(form.username, data.token))
                navigate("/", {replace:true})
            }else {
                alert("Invalid Credentials")
            }
        })
    }

    useEffect(() => {
        // dispatch(register());
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value,
        })
        console.log(form)
    }
    return (
      <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>username</FormLabel>
              <Input type="email" value={form.username} name="username" onChange={handleChange} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" value={form.password} name="password" onChange={handleChange}/>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }} onClick={submitHandle}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    )
}

