import { Box, Button, Flex, Text } from "@chakra-ui/react";
import ThreePic from "../../Components/ProductPageComps/ThreePic";
import { useState } from "react";
import { useEffect } from "react";
import Carousel from "../../Components/ProductPageComps/Carousel";
import "./WomenProductPage.css"
import LeftSd from "../../Components/ProductPageComps/LeftSdComp";
import ThreePicTwo from "../../Components/ProductPageComps/ThreePicTwo";
import BeforeProductFooter from "../../Components/ProductPageComps/BeforeProductFooter";
import Navbar from "../HomepageSection/Navbar";
import BfS from "../../Components/BeforeFooter/BfS";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";

export default function WomenProductPage(){

    const [data,setData]=useState([])
    const [dataTwo,setDataTwo]=useState([])
    const[page,setPage]=useState(1)
    const [pageTwo,setPAgeTwo]=useState(1)
    
    useEffect(()=>{
        fetch(`https://yooxdb.herokuapp.com/WomenNew?_page=${page}&_limit=3`)
        .then((res)=>res.json())
        .then((res)=>setData(res))
        .catch((err)=>console.log(err))
        fetch(`https://yooxdb.herokuapp.com/WomenOne?_page=${pageTwo}&_limit=3`)
        .then((resTwo)=>resTwo.json())
        .then((resTwo)=>setDataTwo(resTwo))
        .catch((errTwo)=>console.log(errTwo))
    },[page,pageTwo])
    
    return(
            <Box  backgroundColor="#f6f6f6" >
                <Navbar/>
                <ThreePic/>
        <Flex alignItems="center" > 
            <LeftSd txt1="NEW ARRIVALS" txt2="VIEW ALL"/>   
            <Flex id="disp" justify="center" ml="0%" position="relative" gap="2%">
                <Button backgroundColor="#333333" 
                borderRadius="50%" onClick={()=>setPage(page-1)} disabled={page===1}
                position="absolute" left="1%" bottom="43%"><Text fontSize="3xl" color="white">⇦</Text></Button>
                {
                    data.map((elem)=>(
                        <Carousel key={elem.id}
                          src={elem.avatar} Brand={elem.Brand}
                          type={elem.type} StrikedPrice={elem.strikedOfPrice}
                           discount={elem.Discount} price={elem.Price}/>
                    ))
                }
                <Button backgroundColor="#333333"
                 borderRadius="50%" onClick={()=>setPage(page+1)} disabled={page===3}
                 position="absolute" right="1%" bottom="43%" ><Text fontSize="3xl" color="white">➩</Text></Button>
            </Flex>
        </Flex>
            <ThreePicTwo/>
        <Flex alignItems="center" > 
            <LeftSd txt1="ONE OF A KIND" txt2="VIEW ALL"/>   
            <Flex id="disp" justify="center" ml="0%" position="relative" gap="2%">
                <Button backgroundColor="#333333" 
                borderRadius="50%" onClick={()=>setPAgeTwo(pageTwo-1)} disabled={pageTwo===1}
                position="absolute" left="1%" bottom="43%"><Text fontSize="3xl" color="white">⇦</Text></Button>
                {
                    dataTwo.map((elem)=>(
                        <Carousel key={elem.id}
                          src={elem.avatar} Brand={elem.Brand}
                          type={elem.type} StrikedPrice={elem.strikedOfPrice}
                          discount={elem.Discount} price={elem.Price}/>
                    ))
                }
                <Button backgroundColor="#333333"
                 borderRadius="50%" onClick={()=>setPAgeTwo(pageTwo+1)} disabled={pageTwo===3}
                 position="absolute" right="1%" bottom="43%" ><Text fontSize="3xl" color="white">➩</Text></Button>
            </Flex>
        </Flex>   
             <BeforeProductFooter src="https://www.yoox.com/images/items/12/12805933LA_14_f.jpg?impolicy=crop&width=306&height=390" Brand="8 by YOOX" StrikedPrice=" 80.00" type="Patterned shirt" discount="56% OFF" price="35.00"/>
             <BfS bottom="12%" left="7%" bottomTwo="12%" leftTwo="67%"/>
             <NewsLetter/>
            </Box>

    )

}