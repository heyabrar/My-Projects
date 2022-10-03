import { Box, SimpleGrid } from "@chakra-ui/react";
import {BsInstagram,BsSnapchat,BsFacebook,BsTwitter} from 'react-icons/bs'
import {AiOutlineYoutube} from 'react-icons/ai'

export default function Footer( ){
    return (
        <>
        <SimpleGrid columns={[1,2,3]} className="FooterSimpleGrid1">
            <Box className="FooterBox">   
                <p>FOLLOW US</p>
                <SimpleGrid columns={[5,5,5]} className='FooterSocialSimpleGrid'>
                <BsInstagram/>
                <AiOutlineYoutube/>
                <BsSnapchat/>
                <BsFacebook/>
                <BsTwitter/>
                </SimpleGrid>
            </Box>

            <Box className="FooterBox">   
                <p>CUSTOMER SERVICE</p>
                <p>Contact us</p>
                <p>Orders & delivery</p>
                <p>Payment & pricing</p>
                <p>Returns & refunds</p>
                <p>FAQs</p>
                <p>Terms & conditions</p>
                <p>Promotion terms & conditions</p>
                <p>Privacy policy</p>
                <p>Accessibility</p>
            </Box>


            <Box className="FooterBox">   
                <p>ABOUT</p>
                <p>Contact us</p>
                <p>Investors</p>
                <p>Boutique Partners</p>
                <p>Affiliate Programmes</p>
                <p>Student discount UNiDAYS</p>
                <p>Youth discount</p>
                <p>Customer Promise</p>
                <p>Sitemap</p>
                <p>Careers</p>
            </Box>
        </SimpleGrid>
        </>
    )
}