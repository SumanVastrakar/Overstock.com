import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  extendTheme

} from '@chakra-ui/react';
import { BiUser, BiHeart } from "react-icons/bi";
import { BsCart } from "react-icons/bs";

import { BsSearch } from "react-icons/bs";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CheckIcon,
  PhoneIcon

} from '@chakra-ui/icons';
import Furniture from '../Pages/Navbar Pages/Furniture';
import Rugs from '../Pages/Navbar Pages/Rugs';
import Decor from '../Pages/Navbar Pages/Decor';
import Bedding from '../Pages/Navbar Pages/Bedding';
import HomeImprovement from '../Pages/Navbar Pages/HomeImprovement';
import Kitchen from '../Pages/Navbar Pages/Kitchen';
import Outdoor from '../Pages/Navbar Pages/Outdoor';
import Lightning from '../Pages/Navbar Pages/Lightning';
import KidsAndBaby from '../Pages/Navbar Pages/KidsAndBaby';
import More from '../Pages/Navbar Pages/More';
import Ideas from '../Pages/Navbar Pages/Ideas';
import SalesAndDeals from '../Pages/Navbar Pages/SalesAndDeals';

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  //writing the logic for hiding and unhiding the furniture boxes

  //for the furniture 

  const hideFurnitureBoxBox = () => {

    document.querySelector("#furniture").classList.remove("underLine")
    document.querySelector(".hiddenFurnitureOfNavbar").classList.add("hidden")


}
const unHideFurnitureBarBox = () => {
  
    document.querySelector("#furniture").classList.add("underLine")
    document.querySelector(".hiddenFurnitureOfNavbar").classList.remove("hidden")

}
  //for the Rugs

  const hideRugsBoxBox = () => {
    
    document.querySelector("#rugs").classList.remove("underLine")
    document.querySelector(".hiddenRugseOfNavbar").classList.add("hidden")


}
const unHideRugsBarBox = () => {

    document.querySelector("#rugs").classList.add("underLine")
    document.querySelector(".hiddenRugseOfNavbar").classList.remove("hidden")

}
  //for the Decor

  const hideDecorBoxBox = () => {
    
    document.querySelector("#decor").classList.remove("underLine")
    document.querySelector(".hiddenDecorOfNavbar").classList.add("hidden")


}
const unHideDecorBarBox = () => {

    document.querySelector("#decor").classList.add("underLine")
    document.querySelector(".hiddenDecorOfNavbar").classList.remove("hidden")

}
  //for the Bedding

  const hideBeddingBoxBox = () => {
    
    document.querySelector("#bedding").classList.remove("underLine")
    document.querySelector(".hiddenBeddingOfNavbar").classList.add("hidden")


}
const unHideBeddingBarBox = () => {

    document.querySelector("#bedding").classList.add("underLine")
    document.querySelector(".hiddenBeddingOfNavbar").classList.remove("hidden")

}
  //for the Home Improvemnet

  const hideHomeBoxBox = () => {
    
    document.querySelector("#homeImprovement").classList.remove("underLine")
    document.querySelector(".hiddenHomeOfNavbar").classList.add("hidden")


}
const unHideHomeBarBox = () => {

    document.querySelector("#homeImprovement").classList.add("underLine")
    document.querySelector(".hiddenHomeOfNavbar").classList.remove("hidden")

}
  //for the Kitchen Improvemnet

  const hideKitchenBoxBox = () => {
    
    document.querySelector("#kitchen").classList.remove("underLine")
    document.querySelector(".hiddenKitchenOfNavbar").classList.add("hidden")


}
const unHideKitchenBarBox = () => {

    document.querySelector("#kitchen").classList.add("underLine")
    document.querySelector(".hiddenKitchenOfNavbar").classList.remove("hidden")

}
  //for the Outdoor Improvemnet

  const hideOutdoorBoxBox = () => {
    
    document.querySelector("#outdoor").classList.remove("underLine")
    document.querySelector(".hiddenOutdoorOfNavbar").classList.add("hidden")


}
const unHideOutdoorBarBox = () => {

    document.querySelector("#outdoor").classList.add("underLine")
    document.querySelector(".hiddenOutdoorOfNavbar").classList.remove("hidden")

}
  //for the    Lightning Improvemnet

  const hideLightningBoxBox = () => {
    
    document.querySelector("#lightning").classList.remove("underLine")
    document.querySelector(".hiddenLightingOfNavbar").classList.add("hidden")


}
const unHideLightningBarBox = () => {

    document.querySelector("#lightning").classList.add("underLine")
    document.querySelector(".hiddenLightingOfNavbar").classList.remove("hidden")

}
  //for the KidsBaby Improvemnet

  const hideKidsBabyBoxBox = () => {
    
    document.querySelector("#kidsBaby").classList.remove("underLine")
    document.querySelector(".hiddenKidsBabyOfNavbar").classList.add("hidden")


}
const unHideKidsBabyBarBox = () => {

    document.querySelector("#kidsBaby").classList.add("underLine")
    document.querySelector(".hiddenKidsBabyOfNavbar").classList.remove("hidden")

}
  //for the More

  const hideMoreBoxBox = () => {
    
    document.querySelector("#more").classList.remove("underLine")
    document.querySelector(".hiddenMoreOfNavbar").classList.add("hidden")


}
const unHideMoreBarBox = () => {

    document.querySelector("#more").classList.add("underLine")
    document.querySelector(".hiddenMoreOfNavbar").classList.remove("hidden")

}
  //for the Ideas

  const hideIdeasBoxBox = () => {
    
    document.querySelector("#ideas").classList.remove("underLine")
    document.querySelector(".hiddenIdeasOfNavbar").classList.add("hidden")


}
const unHideIdeasBarBox = () => {

    document.querySelector("#ideas").classList.add("underLine")
    document.querySelector(".hiddenIdeasOfNavbar").classList.remove("hidden")

}
  //for the Sales and deals

  const hideSalesBoxBox = () => {
    
    document.querySelector("#sales").classList.remove("underLine")
    document.querySelector(".hiddenSalesOfNavbar").classList.add("hidden")


}
const unHideSalesBarBox = () => {

    document.querySelector("#sales").classList.add("underLine")
    document.querySelector(".hiddenSalesOfNavbar").classList.remove("hidden")

}

  return (
    <Box>
{/* //ships to the india */}








<Box display={"flex"}  bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('black.600', 'white')}
        height={'40px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
     <Text ml={10}>
      Ships to : 
     </Text>
     <img  ml={3} src="https://ak1.ostkcdn.com/img/mxc/intFlag_IN.gif" />

<Text  ml={2} color={"black"} fontWeight={"900"}>
  INDIA
</Text>
      </Box>
      <Box>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          height={'80px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}
              fontSize="40px"
            >
              {/* OVERSTOCK */}
              <img width={"170px"}   border={"2px solid black"} src ="https://searchlogovector.com/wp-content/uploads/2018/09/overstock-logo-vector.png"/>
             
            </Text>

            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <Stack spacing={2}>


                <InputGroup>

                  <Input placeholder='Search' mt={6} bg={useColorModeValue("rgb(240,240,243)")} width="1050px" />

                  <InputRightElement mt={6} children={<BsSearch />} color={"white"} backgroundColor={"rgb(255,31,44)"} fontWeight={"900px"} borderRightRadius={"8px"} />


                </InputGroup>
              </Stack>
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={5}>
            <Box>
              <Button
                as={'a'}
                fontSize={'25px'}
                fontWeight={400}
                variant={'link'}
                href={'#'}

              >

                <BiUser mb={-2} />

              </Button>
              <p> Account </p>
            </Box>
            <Box>
              <Button
                as={'a'}
                fontSize={'25px'}
                fontWeight={400}
                variant={'link'}
                href={'#'}>
                <BiHeart />
              </Button>
              <p> List </p>
            </Box>

            <Box>
              <Button
                as={'a'}
                fontSize={'25px'}
                fontWeight={400}
                variant={'link'}
                href={'#'}>
                <BsCart />
              </Button>
              <p> Cart </p>
            </Box>

          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>

        </Collapse>
      </Box>
      <Box display={"flex"} justifyContent={"space-evenly"} bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('black.600', 'white')}
        height={'40px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Text >
      <Box className="NavbarChoiceElement" id="furniture" onMouseOver={unHideFurnitureBarBox} onMouseLeave={hideFurnitureBoxBox}>Furniture</Box>
        </Text>

        <Text>
          <Box className="NavbarChoiceElement" id="rugs" onMouseOver={unHideRugsBarBox} onMouseLeave={hideRugsBoxBox}>Rugs</Box>
        </Text>
        <Text>
        <Box className="NavbarChoiceElement" id="decor" onMouseOver={unHideDecorBarBox} onMouseLeave={hideDecorBoxBox}>Decor</Box>
        </Text>
        <Text>
        <Box className="NavbarChoiceElement" id="bedding" onMouseOver={unHideBeddingBarBox} onMouseLeave={hideBeddingBoxBox}>Bedding</Box>
        </Text>
        <Text>
        <Box className="NavbarChoiceElement" id="homeImprovement" onMouseOver={unHideHomeBarBox} onMouseLeave={hideHomeBoxBox}>Home Improvement</Box>
        </Text>
        <Text>
        <Box className="NavbarChoiceElement" id="kitchen" onMouseOver={unHideKitchenBarBox} onMouseLeave={hideKitchenBoxBox}>Kitchen</Box>
        </Text>
        <Text>
        <Box className="NavbarChoiceElement" id="outdoor" onMouseOver={unHideOutdoorBarBox} onMouseLeave={hideOutdoorBoxBox}>Oudoor</Box>
        </Text>
        <Text>
        <Box className="NavbarChoiceElement" id="lightning" onMouseOver={unHideLightningBarBox} onMouseLeave={hideLightningBoxBox}>   Lightning</Box>
        </Text>

        <Text>
        <Box className="NavbarChoiceElement" id="kidsBaby" onMouseOver={unHideKidsBabyBarBox} onMouseLeave={hideKidsBabyBoxBox}> Kids & Baby</Box>
        </Text>
        <Text>
        <Box className="NavbarChoiceElement" id="more" onMouseOver={unHideMoreBarBox} onMouseLeave={hideMoreBoxBox}> More</Box>
        </Text>
        <Text>
          |
        </Text>
        <Text>
        <Box className="NavbarChoiceElement" id="ideas" onMouseOver={unHideIdeasBarBox} onMouseLeave={hideIdeasBoxBox}>Ideas</Box>
        </Text>
        <Text color={"rgb(237,5,5)"}>
        <Box className="NavbarChoiceElement" id="sales" onMouseOver={unHideSalesBarBox} onMouseLeave={hideSalesBoxBox}>Sales & Deals</Box>
        </Text>


      </Box>

      {/* ///adding of the hidden functionalituies to the various navbar boxes */}

      {/* //for furniture part of the navbar */}
      <Box className='hiddenFurnitureOfNavbar hidden underline' onMouseLeave={hideFurnitureBoxBox} onMouseOver={unHideFurnitureBarBox}>
        <Furniture />
      </Box>

      {/* //for Rugs part of the navbar */}
      <Box className='hiddenRugseOfNavbar hidden underline' onMouseLeave={hideRugsBoxBox} onMouseOver={unHideRugsBarBox}>
        <Rugs />
      </Box>

      {/* //for Decor part of the navbar */}
      <Box className='hiddenDecorOfNavbar hidden underline' onMouseLeave={hideDecorBoxBox} onMouseOver={unHideDecorBarBox}>
        <Decor/>
      </Box>

      {/* //for Bedding part of the navbar */}
      <Box className='hiddenBeddingOfNavbar hidden underline' onMouseLeave={hideBeddingBoxBox} onMouseOver={unHideBeddingBarBox}>
     <Bedding/>
      </Box>

      {/* //for Home Improvement part of the navbar */}
      <Box className='hiddenHomeOfNavbar hidden underline' onMouseLeave={hideHomeBoxBox} onMouseOver={unHideHomeBarBox}>
<HomeImprovement/>
      </Box>

      {/* //for Kitchen part of the navbar */}
      <Box className='hiddenKitchenOfNavbar hidden underline' onMouseLeave={hideKitchenBoxBox} onMouseOver={unHideKitchenBarBox}>
<Kitchen/>
      </Box>

      {/* //for Oudoor part of the navbar */}
      <Box className='hiddenOutdoorOfNavbar hidden underline' onMouseLeave={hideOutdoorBoxBox} onMouseOver={unHideOutdoorBarBox}>
<Outdoor/>
      </Box>

      {/* //for Lighting part of the navbar */}
      <Box className='hiddenLightingOfNavbar hidden underline' onMouseLeave={hideLightningBoxBox} onMouseOver={unHideLightningBarBox}>
<Lightning/>
      </Box>
      {/* //for KidsBaby part of the navbar */}
      <Box className='hiddenKidsBabyOfNavbar hidden underline' onMouseLeave={hideKidsBabyBoxBox} onMouseOver={unHideKidsBabyBarBox}>
<KidsAndBaby/>
      </Box>

      {/* //for More part of the navbar */}
      <Box className='hiddenMoreOfNavbar hidden underline' onMouseLeave={hideMoreBoxBox} onMouseOver={unHideMoreBarBox}>
<More/>
      </Box>

      {/* //for Ideas part of the navbar */}
      <Box className='hiddenIdeasOfNavbar hidden underline' onMouseLeave={hideIdeasBoxBox} onMouseOver={unHideIdeasBarBox}>
<Ideas/>
      </Box>

      {/* //for Sales and Deals part of the navbar */}
      <Box className='hiddenSalesOfNavbar hidden underline' onMouseLeave={hideSalesBoxBox} onMouseOver={unHideSalesBarBox}>
<SalesAndDeals/>
      </Box>



    </Box>
  );
}

