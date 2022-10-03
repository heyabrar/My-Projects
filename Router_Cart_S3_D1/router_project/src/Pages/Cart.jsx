import { Box, SimpleGrid } from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../Context/AuthContext";
export default function Cart ( ) {
    const {AddToCart,SetAddToCart,theme} = useContext(UserContext);
    const handleRemoveFromCart = (id) =>{
        let remove = AddToCart.filter((elem)=> elem.id !== id)
        SetAddToCart(remove)
    }

    const sty = {
        light : {
            color : 'black',
            backgroundColor : 'white'
        },
        dark : {
            color : 'white',
            backgroundColor : 'black'
        },
        freeDeliveryIight : {
            color : 'green'
        },
        freeDeliveryDark : {
            color : 'red'
        }
    }
    
    return (
        <>
        <div className="dummy"></div>
        <SimpleGrid columns={[2,2,4]} className='MainPageProdcutsSimpleGrid'>
            {AddToCart.map((elem)=>{
                return <Box className="MainPageProdcutsBox" key={elem.id}>
                    <img src={elem.image} alt={elem.name} />
                    <h4>{elem.name}</h4>
                    <p>₹ {elem.price}</p>
                    <p style={theme === 'light' ? sty.freeDeliveryIight:sty.freeDeliveryDark}>{elem.delivery}</p>
                    <button className="ShopButton" onClick={( )=>handleRemoveFromCart(elem.id)} style={theme === 'light' ? sty.light : sty.dark}>Remove</button> 
                </Box>
            })}
        </SimpleGrid>
        </>
    )
}