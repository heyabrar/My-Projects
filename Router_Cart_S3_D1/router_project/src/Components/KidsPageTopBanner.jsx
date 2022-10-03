import { Box, SimpleGrid } from "@chakra-ui/react";

export default function KidsPageTopBanner ( ) {
    return (
        <>
        <h1 className="ThisWeekH1">This Week's Highlights</h1>
         <SimpleGrid columns={[1,1,3]} className='MainPageSimpelGridBanner'>
            <Box className="MainPageBannerBox">
                <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3919672/data/98174fa02a3d70c5b94d219539cc78ce/1x1_two-columns/637/data.jpeg" alt="MenPageImg1" />
                <p>BALMAIN KIDS</p>
                <p>From shirts and T-shirt dresses </p>
            </Box>
            
            <Box className="MainPageBannerBox">
                <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3919264/data/a82e33d963cf6520aa751e7bbf4c1cdd/1x1_two-columns/637/data.jpeg" alt="MenPageImg2" />
                <p>BABY MADISON, TAIPEI</p>
                <p>All the staples they need from the Taipei boutique</p>
            </Box>

            <Box className="MainPageBannerBox">
                <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3919742/data/ac2729ccb1f0d97ebf25913fcf6dfb51/1x1_two-columns/637/data.jpeg" alt="MenPageImg3" />
                <p>ALL THE ACCESSORIES</p>
                <p>Beanies, scarves, sneakers: it’s all in the details</p>
            </Box>
        </SimpleGrid> 
        </>
    )
}