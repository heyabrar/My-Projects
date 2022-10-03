import { useEffect } from "react";
import { useState } from "react"
import { getDataForHome } from "../Fetch/Fetch";
import {Box, SimpleGrid} from '@chakra-ui/react'
import { Link } from "react-router-dom";

export default function FetchDataForHomeMens ( ) {
    const [Home,setHome] = useState([ ]);

    useEffect(( )=>{
        handleHomeData( );
    },[ ]);

    const handleHomeData = ( ) =>{
        getDataForHome( ).then((res)=>{
            setHome(res)
        })
    }
    
    return (
        <>
        <SimpleGrid columns={[2,2,5]} className='HomeMensDataSimpleGrid'>
            {Home.map((elem)=>{
                return <Box className="HomeMensDataBox" key={elem.id}>
                   <Link to={'/mens'}><img className="HomeDataImage" src={elem.image} alt={elem.name} /></Link>
                    <h3>{elem.name}</h3>
                   <Link to={'/mens'}><p className="ShowMore">Show More</p></Link>
                </Box>
            })}
        </SimpleGrid>
        </>
    )
}