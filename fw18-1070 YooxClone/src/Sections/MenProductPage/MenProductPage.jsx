import { Box, Button, Flex, Text } from "@chakra-ui/react";
import ThreePic from "../../Components/ProductPageComps/ThreePic";
import { useState } from "react";
import { useEffect } from "react";
import Carousel from "../../Components/ProductPageComps/Carousel";
import "./MenProductPage.css"

export default function MenProductPage(){

    const [data,setData]=useState([])
    const[page,setPage]=useState(1)
    
    useEffect(()=>{
        fetch(`https://yooxdb.herokuapp.com/MenNew?_page=${page}&_limit=3`)
        .then((res)=>res.json())
        .then((res)=>setData(res))
        .catch((err)=>console.log(err))
    },[page])
    const handleClick=()=>{
        setPage(page+1)
        document.getElementById("disp").style.transition="all ease in out 1s"

    }
    return(
            <Box  backgroundColor="#f6f6f6" >
                <ThreePic/>
                <Button backgroundColor="#333333" visibility={page===1}
                borderRadius="50%" onClick={()=>setPage(page-1)} disabled={page===1}
                position="absolute" left="27%" bottom="20%"><Text fontSize="3xl" color="white">⇦</Text></Button>
                <Flex id="disp" justify="center" ml="30%" position="relative">
                {
                    data.map((elem)=>(
                        <Carousel 
                          src={elem.avatar} Brand={elem.Brand}
                          type={elem.type} StrikedPrice={elem.strikedOfPrice}
                           discount={elem.Discount} price={elem.Price}/>
                    ))
                }
                <Button backgroundColor="#333333"
                 borderRadius="50%" onClick={handleClick} disabled={page===3}
                 position="absolute" right="0%" bottom="48%" ><Text fontSize="3xl" color="white">➩</Text></Button>
                </Flex>
            </Box>

    )
}