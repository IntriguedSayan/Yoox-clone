import { Box, Button, Flex, Heading, Highlight, Icon, Image, Text } from "@chakra-ui/react";
import CartPageNav from "./CartPageNav";
import {GrPaypal} from "react-icons/gr"
import { useEffect } from "react";
import { useState } from "react";
import {Table, Thead,Tbody,Tfoot,Tr,Th,Td,TableCaption,TableContainer,} from '@chakra-ui/react'

export default function CartPage(){

    let newPrice;
    const[data,setData]=useState([])
    const[qty,setQty]=useState(1)

        useEffect(()=>{
            fetch(`https://yooxdb.herokuapp.com/Cart`)
            .then((res)=>res.json())
            .then((res)=>setData(res))
            .catch((err)=>console.log(err))

        },[data])
const handleInc=(id,price)=>{
    console.log(id,price)
    let Qt=((id-(id-1))+1) 
    newPrice=Number(price*Qt)

}
const handleDec=()=>{

}

            return(
                <Box>
                    <CartPageNav/>
                    <Flex mt="5%" direction="column" >
                        <Heading mb="4%" ml="40%"><Highlight query='SHOPPING CART' styles={{ px: '1', py: '1', bg: 'yellow.200' }}>SHOPPING CART</Highlight></Heading>
                        <Flex gap="40%">
                            <Text width="250px" ml="2%"><b>BACK TO SHOPPING</b></Text>
                           <Flex gap="4%"marginRight="-80%">
                            <Button backgroundColor="yellow" size="lg" width="200px"><Icon as={GrPaypal}/></Button>
                            <Text><b>or</b></Text>
                            <Button backgroundColor="#333333"><Text color="white">PROCEED WITH YOUR ORDER</Text></Button>
                           </Flex>
                        </Flex>
                    </Flex>
                    <hr style={{border:"2px solid lightgray", marginTop:"2%",width:"90%", marginLeft:"5%"}} />
                    <TableContainer>
                        <Table  variant="striped" colorScheme="cyan">
                        <Thead>
                            <Tr>
                                <Th><b>Item No.</b></Th>
                                <Th><b>Image</b></Th>
                                <Th><b>Details</b></Th>
                                <Th><b>Quantity</b></Th>
                                <Th><b>Price</b></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                data.map((elem,ind)=>(
                                    <Tr id={elem.id} >
                                        <Td key={elem.id}>{Number(ind)+1}</Td>
                                        <Td>{<Image src={elem.Avatar} width="75px"/>}</Td>
                                        <Td><Flex direction="column"  gap="5%">
                                            <Text>{elem.brand}</Text>
                                            <Text>{elem.Type}</Text>
                                            </Flex></Td>
                                        <Td><Flex>
                                            <Button colorScheme="orange" onClick={()=>handleDec(id)}
                                             disabled={qty===1} width="70px">-</Button>
                                            <Text>{(elem.id-(elem.id-1))}</Text>
                                            <Button colorScheme="orange" onClick={()=>handleInc(elem.id,elem.price)} width="70px">+</Button>
                                            </Flex>
                                            </Td>
                                        <Td>${newPrice?newPrice:elem.price}</Td>       
                                    </Tr>
                                ))
                            }
                        </Tbody>
                        </Table>
                    </TableContainer>
                </Box>
            )
}