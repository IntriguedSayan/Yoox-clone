import { Box,Flex, Image, Text } from "@chakra-ui/react";
import "./BfS.css"

export default function BfS(){

    return(
    <Flex m="auto" width="90%" mt="2%" >
            <Box>
                <Image src="https://www.yoox.com/images/yoox80/banners/6824_2_MoonLandingAnniversary_Half.png?634485886869569819#width=690&height=637" position="relative" width="100%" height="90%" />
                <Box className="texts"> 
                    <Text fontSize="2xl">ASTRO-INSPIRED ACCESSORIES</Text>
                    <Flex>
                        <Text><b>DISCOVER MORE</b></Text>
                        <Text><b>SHOP NOW</b></Text>
                    </Flex>
                </Box>
            </Box>
            <Box>
                <Image src="https://www.yoox.com/images/yoox80/banners/6895_2_GenZ_Pride_WM_Half.jpg?634485886869569819#width=689&height=637" position="relative" width="90%"  height="90%" />
                    <Box className="textsTwo"> 
                        <Text fontSize="2xl">JUST LOVE YOURSELF</Text>
                        <Text fontSize="sm">Share your pride</Text>
                        <Flex>
                            <Text><b>SHOP NOW</b></Text>
                            <Text><b>RIGHT THIS WAY</b></Text>
                        </Flex>
                    </Box>
                </Box>
        </Flex>
    )
}