import { Box, Container, Img, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { useContext } from "react"
import { Context } from "../Context/ContextProvider"

export default function Cart( ){
    const  {cartData} = useContext(Context);
    // console.log(cartData)
    return (
        <div className="CartMainDiv">
            <div className="CartOutterDiv"> 
               <SimpleGrid columns={[1, 2, 4]} spacing='20px' className="SimpleGrid">
               {cartData.map((elem)=>{
                return (
                <Box className="Box">
                    <Stack key={elem.name} className='Stack'>
                           <Container maxW='250px' key={elem.name} className='Container'>
                           <Img  src={elem.image} className='CartImage'/>
                            <Text className="CartName">{elem.name}</Text>
                            <Text style={{marginTop:'5px'}}>{'₹' +elem.price}</Text>
                            <Text style={{color:'green',marginTop:'5px'}}>{elem.delivery}</Text>
                                <button className="ShopButtonCart">SHOP</button>
                            </Container>
                    </Stack>
                </Box>
                );
               })}
                  </SimpleGrid>
            </div>
        </div>   
    )
}