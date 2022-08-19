import { Route, Routes } from "react-router-dom";
import AboutUs from "../Pages/AboutUs";
import FaQ from "../Pages/FAQ";
import Home from "../Pages/Home";
import Kids from "../Pages/Kids";
import Mens from "../Pages/Men";
import Womens from "../Pages/Women";
import Cart from "../Pages/Cart";

export default function AllRoutes( ){
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/mens" element={<Mens/>}/>
                <Route path="/womens" element={<Womens/>}/>
                <Route path="/kids" element={<Kids/>}/>
                <Route path="/about_us" element={<AboutUs/>}/>
                <Route path="/faq" element={<FaQ/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </div>
    )
}