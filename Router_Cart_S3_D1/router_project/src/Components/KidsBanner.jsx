import { Box, SimpleGrid } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/AuthContext";

export default function KidsBanner( ){
    const {theme} = useContext(UserContext)
    
    const sty = {
        light : {
            color : 'black',
            backgroundColor : 'white'
        },
        dark : {
            color : 'white',
            backgroundColor : 'black'
        }
    }

    return (
        <>
         <SimpleGrid columns={[1,1,2,]} className='BannerSimpleGrid1'>
                <Box className='SimpleGrid1Box1'>
                        <img className='BannerImage1' src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3919696/data/732d7e3754fce9dd3998a417aa68561a/1x1_two-columns/637/data.jpeg" alt="women" />
                </Box>
                
                <Box className='SimpleGrid1Box1'>
                    <p>GOING LOGO <br/> The season’s most iconic sweaters</p>
                    <Box className='BannerShopButtonBox'> 
                      <Link to={'/kids'}><button className='BannerShopButton' style={theme === 'light' ? sty.light : sty.dark}>Explore More</button></Link>
                    </Box>
                </Box>
            </SimpleGrid>
        </>
    )
}