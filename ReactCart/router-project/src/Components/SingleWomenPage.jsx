// import { useEffect } from "react";
// import { useState } from "react"
// import { Link, useParams } from "react-router-dom";
// import { SingleWomenData } from "../Fetch/fetch";

// export default function SingleWomenDisplay( ){
//     const [data,setData] = useState([ ]);
//     const params = useParams( );
//     useEffect(( )=>{
//         SingleWomenData(params.id).then((res)=>{
//             setData(res);
//         })
//     },[params.id])
//     return (
//         <div>
//             <div className="SinglePageOutterDiv">
//                 <img className="SinglePageImage" src={data.image} alt={data.name} />
//                <div className="SinglePageInfo">
//                         <h3 className="SinglePageName">{data.name}</h3>
//                         <h4 className="SinglePagePrice">{`₹ ${data.price}`}</h4>
//                         <p className="SinglePageDelivery" style={{color : "green"}}>{data.delivery}</p>
//                         <Link to={`/cart/${data.category}/${data.id}`}><button className="CartButton">CART</button></Link>
//                </div>
//             </div>
//         </div>
//     )
// }

