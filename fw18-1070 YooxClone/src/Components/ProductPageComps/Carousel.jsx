import { Flex, Image, Text } from '@chakra-ui/react';


export default function Carousel({src,Brand,type,StrikedPrice,discount,price}){

    return(
        <Flex direction="column" textAlign="center" >
            <Image width="89%" src={src}/>
            <Text as="h3">{Brand}</Text>
            <Text fontSize="large">{type}</Text>
            <Flex justify="center" gap="5%">
                <Text textDecoration="line-through" >${StrikedPrice}</Text>
                <Text>{discount}</Text>
            </Flex>
            <Text>${price}</Text>
        </Flex>
    )
}