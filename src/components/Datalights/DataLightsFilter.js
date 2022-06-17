import React, { useEffect, useState } from 'react'
import {  Box, Text, Checkbox, CheckboxGroup, VStack,  Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider, Button } from "@chakra-ui/react"
import { useSearchParams } from 'react-router-dom';
import  {fetchData} from "../../Redux/DatalighProduct/action"
import { useDispatch } from 'react-redux';

export default function DataLightsFilter() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [categoryValues, setCategoryValues] = useState(searchParams.getAll("category") || []);
    const dispatch = useDispatch();

    const categoryHandler = (values) => {
        console.log(values)
        setCategoryValues(values)
    }

    useEffect(() => {
        if(categoryValues){
            setSearchParams({category : categoryValues}, {replace : true})
            let params = {
                category : searchParams.getAll("category")
            }
            dispatch(fetchData(params))
        }
    },[categoryValues, setSearchParams, dispatch, searchParams])


    //it will return an array of the products selected
    console.log(searchParams.getAll("category"))
    return (
        <Box>
            <Box display={{ base: "none", md: "block" }} p="1rem 5rem">
                <Text fontSize="2xl" m = "1rem" fontWeight={"600"}>Filter By Category</Text>
                
                <CheckboxGroup colorScheme='green' defaultValue={categoryValues} onChange={categoryHandler}>
                    <VStack alignItems={"baseline"}>
                        <Checkbox value='Pendant'>Pendent</Checkbox>
                        <Checkbox value='Chandeliers'>Chandeliers</Checkbox>
                 
                        <Checkbox value='Flush Mount'>Flush Mount</Checkbox>
                       
                    </VStack>
                </CheckboxGroup>
            </Box>
         
        </Box>
    )
}


