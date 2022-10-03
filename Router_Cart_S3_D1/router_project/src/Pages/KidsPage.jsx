import { Box, SimpleGrid } from '@chakra-ui/react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import KidsBanner from '../Components/KidsBanner'
import KidsPageTopBanner from '../Components/KidsPageTopBanner'
import MyModal from '../Components/Modall';
import Pagination from '../Components/Pagination';
import { UserContext } from '../Context/AuthContext';
import { GetKidsPageData } from '../Fetch/Fetch';

const getCurrentPage = (value) =>{
    value = Number(value);

    if(value === 'number' && value <=0)
    {
        value = 1;
    }

    if(!value){
        value = 1
    }
    return value;
}

export default function KidsPage ( ){
    const [KidsData,setKidsData] = useState([ ]);
    const [searchParams,setSearchParams] = useSearchParams( );
    const [page,setPage] = useState(getCurrentPage(searchParams.get('page')) || 1);
    const [totalPage,setTotalPage] = useState(0);
    const [ShopProduct,setShopProduct] = useState({ });
    const [VisibleModal,setVisibleModal] = useState(false);
    const {theme,isAuth,LogOutBtn} = useContext(UserContext)

    useEffect(( )=>{
        handleKidsData( );
    },[page])

    useEffect(( )=>{
        let params = {page};
        setSearchParams(params);
    },[page])

    const handleKidsData = ( ) =>{
        GetKidsPageData(page,setTotalPage).then((res)=>{
            setKidsData(res)
        })
    };

    const handleShop = (elem) =>{
        setVisibleModal(true)
        setShopProduct(elem)
    };

    const sty = {
        light : {
            color : 'black',
            backgroundColor : 'white'
        },
        dark : {
            color : 'white',
            backgroundColor : 'black'
        },
        logOutLight : {
            color : 'black',
            backgroundColor : 'white'
        }
    };

    return (
        <>
        <div className="dummy"></div>
        <KidsBanner/>
        <KidsPageTopBanner/>
        <h1 className="MensCollectionH1">Kid's Collection</h1>
        <SimpleGrid columns={[2,2,4]} className='MainPageProdcutsSimpleGrid'>
            {KidsData.map((elem)=>{
                return <Box className="MainPageProdcutsBox" key={elem.id}>
                    <img onClick={( ) => handleShop(elem)} src={elem.image} alt={elem.name} />
                    <h4>{elem.name}</h4>
                    <p>₹ {elem.price}</p>
                    <button className="ShopButton" onClick={( )=>handleShop(elem)} style={theme === 'light' ? sty.light : sty.dark}>SHOP</button> 
                </Box>
            })}
            <MyModal data={ShopProduct} isOpen={VisibleModal} setIsopen={setVisibleModal}/>
        </SimpleGrid>
        <Pagination current={page} onChange={(page) => setPage(page)} totalPage={totalPage}/>
        <div className="LogOutBtn"> <button style={theme === 'light' ? sty.logOutLight : sty.logOutLight} onClick={LogOutBtn}>{isAuth ? 'LogOut' : 'LogIn'}</button></div>
        </>
    )
}