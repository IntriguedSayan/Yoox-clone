import { Flex, Text,Select, Box, Stack } from "@chakra-ui/react";
import "./NavbarTop.css"

export default function NavbarTop(){

    return(
        <Box className="TopSec">
            <Flex className="leftSec" >
                <Select style={{border:"none",fontSize:"13px",fontWeight:"bolder"}} >
                    <option value=""><b>UNITED STATES</b></option>
                    <option value="india">IN</option>
                    <option value="china">CHINA</option>
                    <option value="morocco">MOROCCO</option>
                    <option value="england">ENGLAND</option>
                </Select>
                <Text fontSize="sm" >CUSTOMER CARE</Text>
            </Flex>
            <div  className="rightSec" >
                <Text>REGISTER</Text>
                <Text>LOGIN</Text>
            </div>

        </Box>
    )
}