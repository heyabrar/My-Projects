import { useEffect } from "react";
import { useState } from "react"
import { getDataForHomeWomens } from "../Fetch/Fetch";
import {Box, SimpleGrid} from '@chakra-ui/react'
import { Link } from "react-router-dom";

export default function FetchDataForHomeWomens ( ) {
    const [Home,setHome] = useState([ ]);

    useEffect(( )=>{
        handleHomeData( );
    },[ ]);

    const handleHomeData = ( ) =>{
        getDataForHomeWomens( ).then((res)=>{
            setHome(res)
        })
    }
    
    return (
        <>
        <SimpleGrid columns={[2,2,5]} className='HomeMensDataSimpleGrid'>
            {Home.map((elem)=>{
                return <Box className="HomeMensDataBox" key={elem.id}>
                  <Link to={'/womens'}><img className="HomeDataImage" src={elem.image} alt={elem.name} /></Link>
                    <h3>{elem.name}</h3>
                   <Link to={'/womens'}><p className="ShowMore">Show More</p></Link>
                </Box>
            })}
        </SimpleGrid>
        </>
    )
}