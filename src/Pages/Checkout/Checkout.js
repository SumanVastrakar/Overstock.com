import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
 Checkbox, CheckboxGroup,  Menu,
    MenuButton,
  } from '@chakra-ui/react';
  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
  } from 'react-icons/md';
  import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
  import { FcMoneyTransfer, FcFaq, FcUnlock } from "react-icons/fc";
  import { Link } from 'react-router-dom';

  export default function Payment() {
    return (
      <Container bg="white" maxW = "full" mt={0} centerContent overflow="hidden">
          <Heading as={"h1"}> Payment Page </Heading>
        <Flex>
          
          <Box
            bg="rgb(214,225,236)"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}>
                  
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
            
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                      <FormControl id="name">
                          <FormLabel>Email*</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input type="text" width = "400px"/>
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>First Name*</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Last Name*</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input type="number" width = "400px" />
                          </InputGroup>
                        </FormControl>
                    
                        <FormControl id="name">
                          <FormLabel> Contact No*</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdPhone  color="gray.800" />}
                            />
                            <Input type="number" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Address Line 1*</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdLocationOn  color="gray.800" />}
                            />
                            <Input type="text" width = "400px" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Address Line 2*</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="Enter Your Address"
                          />
                        </FormControl>
       
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              
                <WrapItem>
               
                  <Box bg="white" borderRadius="lg">
                 
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Card Type*</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<FcMoneyTransfer color="gray.800" />}
                            />
                            <Input type="text" width = "400px" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Credit Card Number*</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<FcFaq color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Expiration Date*</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Security Code*</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<FcUnlock color="gray.800" />}
                            />
                            <Input type="text" width = "400px" />
                          </InputGroup>
                        </FormControl>
                        <Box marginLeft="-20px" >
               
                
                <CheckboxGroup colorScheme='green' marginLeft="-20px" >
                    <VStack  alignItems={"baseline"}>
                       
                        <Checkbox marginLeft={"10px"} value='bedding'>	When you sign up for email, you'll get   <br />
                        exclusive coupons, sale notifications, and product ideas</Checkbox>
                    </VStack>
                </CheckboxGroup>
            </Box>
            <FormControl id="name" float="right">
                <Link to="/thankyou">
          
                        <Button
                          variant="outline"
                          bg="black"
                          color="white"
                          _hover={{}}
                          onClick={() => {
                            alert("Order Placed Successfully")

                          }}
                          >
                          Place Order ➡
                        </Button>
                        </Link>
                      </FormControl>
         
                       
                      </VStack>
                    </Box>
        
                  </Box>
        
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
         
        </Flex>

      </Container>
    );
  }