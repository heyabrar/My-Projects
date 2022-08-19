import { useEffect } from "react";
import { useState } from "react"
import {MyModal} from "../Components/Modal";
import Pagination from "../Components/Pagination";
import { MensData } from "../Fetch/fetch";

export default function Mens( ){
    const [men,setMen] = useState([ ]);
    const [page,setPage] = useState(1);
    const [shop,setShop] =  useState({ })
    const [visibleModal, setvisibleModal] = useState(false);

    useEffect(()=>{
        MensData({page}).then((res)=>{
            setMen(res);
            // console.log(res)
        })
    },[page])

    const handleShop = (elem) =>{
        setvisibleModal(true)
        setShop(elem)
    }
    // console.log(shop)
    return (
        <div className="MainDiv">
            <div className="OutterDiv">
                {men.map((elem)=>{
                    return <div className="ImageDiv" key={elem.id}>
                        <div className="innerImageDiv"><img className="ProductImages" src={elem.image} alt={elem.title} /></div>
                        <h3 style={{color : 'grey'}}>{elem.name}</h3>
                        <h4>{`₹ ${elem.price}`}</h4>
                        <p style={{color : 'green'}}>{elem.delivery}</p>
                        <button className="ShopButton" onClick={( ) => handleShop(elem)} >SHOP</button>
                    </div>
                })}
                 <MyModal data={shop} isOpen={visibleModal} setIsopen={setvisibleModal}/>
            </div>
            <Pagination current={page} onChange={(page) => setPage(page)}/>  
        </div>
    )
}