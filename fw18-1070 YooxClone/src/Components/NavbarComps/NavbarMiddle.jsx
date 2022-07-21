import { Box, Flex,Image } from "@chakra-ui/react";

import "./NavbarMiddle.css"

export default function NavbarMiddle({mt}){

    return(
        <Box className="MiddleSec" mt={mt} >
            <Flex justify="center" gap="1rem" >
                <h2>WOMEN</h2>
                <h2>MEN</h2>
                <h2>KIDS</h2>
                <h2>/</h2>
                <h2>DESIGN+ART</h2>
            </Flex>
            <Box>
                <Image className="img" src="https://www.yoox.com/media/yoox16/header/yoox-logo-p.svg" width="100px" height="45px" objectFit="cover"/>
            </Box>
            <Flex justify="center" gap="1rem">
                 <h1 className="icons">
                     🔍
                 </h1>
                 <h1 className="icons">
                    ♡
                 </h1>
                 <h1 className="icons">
                    👜
                 </h1>
            </Flex>
        </Box>
    )
}