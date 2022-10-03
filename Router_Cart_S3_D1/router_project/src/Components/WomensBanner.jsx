import {Box, SimpleGrid} from '@chakra-ui/react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../Context/AuthContext'
export default function WomensBanners ( ){
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
                        <img className='BannerImage1' src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3938416/data/a437ed9da38002ad7280ef1eb184700c/1x1_two-columns/637/data.jpeg" alt="women" />
                </Box>
                <Box className='SimpleGrid1Box1'>
                    <p>THE NEW-SEASON EDIT</p>
                    <p style={{fontSize : '20px'}}>Get Upto 30% OFF</p>
                    <Box className='BannerShopButtonBox'> 
                      <Link to={'/womens'}><button className='BannerShopButton' style={theme === 'light' ? sty.light : sty.dark} >Explore More</button></Link>
                    </Box>
                </Box>
            </SimpleGrid>       
        </>
    )
}