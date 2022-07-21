import { Flex, Text,Select, Box, Stack } from "@chakra-ui/react";
import LogInModal from "../SignUp&LogIn/LogInModal";

import "./NavbarTop.css"

export default function NavbarTop({position,zIndex,top,shadow}){

    return(
        <Box className="TopSec" position={position} zIndex={zIndex} top={top} boxShadow={shadow}  >
            <Flex className="leftSec" >
                <Select style={{border:"none",fontSize:"12px",fontWeight:"bolder",width:"130px"}} >
                    <option value="">UNITED STATES</option>
                    <option value="india">IN</option>
                    <option value="china">CHINA</option>
                    <option value="morocco">MOROCCO</option>
                    <option value="england">ENGLAND</option>
                </Select>
                <Text fontSize="small" lineHeight="11px" mt="1rem" width="250px" ><b>CUSTOMER CARE</b></Text>
            </Flex>
            <div  className="rightSec" >
                <Text>REGISTER</Text>
                <Box><LogInModal/></Box>
                
                
            </div>

        </Box>
    )
}