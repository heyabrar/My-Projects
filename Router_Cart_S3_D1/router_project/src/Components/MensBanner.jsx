import { Box, SimpleGrid } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/AuthContext";

export default function MensBanner ( ) {
    const {theme} = useContext(UserContext);

    const sty = {
        light : {
            color : 'black',
            backgroundColor : 'white'
        },
        dark : {
            color : 'white',
            backgroundColor : 'black'
        }
    };

    return (
        <>
         <div columns={[1,1,2,]} className='BannerSimpleGrid1ColumnFlip'>
                <Box className='SimpleGrid1Box1'>
                    <p>OFF-WHITE FANS: YOUR NEW WARDROBE IS HERE</p>
                    <Box className='BannerShopButtonBox'> 
                      <Link to={'/mens'}><button className='BannerShopButton' style={theme === 'light' ? sty.light : sty.dark}>Explore More</button></Link>
                    </Box>
                </Box>

                <Box className='SimpleGrid1Box1'>
                        <img className='BannerImage1' src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3937486/data/a28bf57b57b14a2c6f7d821d97d160b7/1x1_two-columns/637/data.jpeg" alt="women" />
                </Box>
            </div >
        </>
    )
}