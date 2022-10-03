import { Box, SimpleGrid } from "@chakra-ui/react";

export default function WomensPageTopBanner ( ) {
    return (
        <>
        <h1 className="ThisWeekH1">This Week's Highlights</h1>
         <SimpleGrid columns={[1,1,3]} className='MainPageSimpelGridBanner'>
            <Box className="MainPageBannerBox">
                <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3938404/data/f47df588e9d0e985c1425f4ce4e89a4a/3x4_three-columns/480/data.jpeg" alt="MenPageImg1" />
                <p>JACQUEMUS</p>
                <p>Hold on to that summer feeling</p>
            </Box>
            
            <Box className="MainPageBannerBox">
                <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3938354/data/2d234013748d4136bb8813a3aae676ec/3x4_three-columns/480/data.jpeg" alt="MenPageImg2" />
                <p>BURBERRY</p>
                <p>Fall layers, the Riccardo Tisci way</p>
            </Box>

            <Box className="MainPageBannerBox">
                <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3938430/data/af2d7a5344c4c5b1ff474b8ec6115924/3x4_three-columns/480/data.jpeg" alt="MenPageImg3" />
                <p>SWEATER WEATHER</p>
                <p>Versace twinsets lead the charge</p>
            </Box>
        </SimpleGrid> 
        </>
    )
}