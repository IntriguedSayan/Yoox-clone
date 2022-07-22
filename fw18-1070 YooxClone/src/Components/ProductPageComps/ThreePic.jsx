import { Box, Flex, Image, Text } from "@chakra-ui/react";
import "./ThreePic.css"

export default function ThreePic({src,}){

    return(
        <Flex className="threePic">
            <Flex>
                <Image className="firstPic" src="https://www.yoox.com/images/yoox80/banners/6944_1_DesignerOnSale_HL_M_US.png?634485886869569819#width=430&height=600" />
                
            </Flex>
            <Flex className="MiddleText" direction="column" gap="5%" justify="center" textAlign="center">
                <Text>DESIGNERS</Text>
                <Flex  direction="column" textAlign="center" gap="4%">
                <Text fontSize="lg" ><b>BRUNELLO CUCINELLI</b></Text>
                <Text fontSize="lg"><b>DSQUARED2</b></Text>
                <Text fontSize="lg"><b>DOLCE & GABBANA</b></Text>
                <Text fontSize="lg"><b>ROBERTO CAVALLI</b></Text>
                <Text fontSize="lg"><b>MAISON MARGIELA</b></Text>
                <Text fontSize="lg"><b>VERSACE</b></Text>
                <Text fontSize="lg"><b>BALENCIAGA</b></Text>
                <Text fontSize="lg"><b>GUCCI</b></Text>
                <Text fontSize="lg"><b>PRADA</b></Text>
                <Text fontSize="lg"><b>MARNI</b></Text>
                </Flex>
                <Text fontSize="lg"><u><b>VIEW ALL</b></u></Text>

            </Flex>
            <Flex>
                <Image className="thirdPic" src="https://www.yoox.com/images/yoox80/banners/5460_1_TheGivingMovement_HL_M.jpg?634485886869569819#width=430&height=600"/>
            </Flex>

        </Flex>
    )
}