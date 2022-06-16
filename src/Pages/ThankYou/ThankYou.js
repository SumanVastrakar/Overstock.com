import React from 'react'
import {useNavigate} from "react-router-dom"
import {Link} from "react-router-dom"
import {Box, Button} from "@chakra-ui/react"

export default function ThankYou() {

    

  return (
    <Box display="inline-block" marginLeft ="30%" >
<img width="600px" height = "600px" src="https://i.gifer.com/2yAg.gif" alt="" />
<Link to= "/">
<Button margin={"20px"} width="600px" height = "60px"  fontSize= "30px"colorScheme='teal'>Back To Home Page</Button>
</Link>
</Box>
  )
}
