import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import FetchDataForHomeKids from "./FetchDataForHomeKids";
import FetchDataForHomeMens from "./FetchDataForHomeMens";
import FetchDataForHomeWomens from "./FetchDataForHomeWomens";

export default function SideScroll ( ){
    return(
        <>
        <h1 className='Collection'>Collections</h1>
        <Tabs isFitted variant='closed' colorScheme='red'>
            <TabList mb='1em'>
                <Tab fontSize={'19px'} className="ScrollTitle">Womens</Tab>
                <Tab fontSize={'19px'}  className="ScrollTitle">Mens</Tab>
                <Tab fontSize={'19px'} className="ScrollTitle">Kids</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <FetchDataForHomeWomens/>
                </TabPanel>
                <TabPanel>
                    <FetchDataForHomeMens/>
                </TabPanel>
                <TabPanel>
                    <FetchDataForHomeKids/>
                </TabPanel>
            </TabPanels>
        </Tabs>
        </>
    )
}