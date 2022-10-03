import { Box, SimpleGrid } from "@chakra-ui/react";

export default function MensPageTopBanner( ){
    return (
        <>
        <h1 className="ThisWeekH1">This Week's Highlights</h1>
         <SimpleGrid columns={[1,1,3]} className='MainPageSimpelGridBanner'>
            <Box className="MainPageBannerBox">
                <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3937492/data/5901e697b0701825c7e0a5093429ef2f/3x4_three-columns/480/data.jpeg" alt="MenPageImg1" />
                <p>BRUNELLO CUCINELLI</p>
                <p>A masterclass in perennial dressing</p>
            </Box>
            
            <Box className="MainPageBannerBox">
                <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3937460/data/3a3bb303af15416d080226c13589ff45/3x4_three-columns/480/data.jpeg" alt="MenPageImg2" />
                <p>JIL SANDER</p>
                <p>The latest from the minimalist favorite</p>
            </Box>

            <Box className="MainPageBannerBox">
                <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3937584/data/8cb0a6038ac15aee463af4a3b63ce67c/3x4_three-columns/480/data.jpeg" alt="MenPageImg3" />
                <p>NOTICE-ME KNITWEAR</p>
                <p>Bold designs from Sacai and more</p>
            </Box>
        </SimpleGrid> 
        </>
    )
}