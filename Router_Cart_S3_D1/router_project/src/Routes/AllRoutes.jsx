import { Route, Routes } from "react-router-dom";
import HomePage from '../Pages/HomePage'
import MensPage from '../Pages/MensPage'
import WomensPage from '../Pages/WomensPAge'
import KidsPage from "../Pages/KidsPage";
import AboutPage from "../Pages/AboutPage";
import Cart from "../Pages/Cart";
import PrivateRoute from "../Context/PrivateRoute";
import LogIn from "../Pages/Login";
import NotFoundPage from "../Pages/NotFoundPage";

export default function AllRoutes( ){
    return (
        <>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/mens" element={<PrivateRoute><MensPage/></PrivateRoute>}/>
            <Route path="/womens" element ={<PrivateRoute><WomensPage/></PrivateRoute>}/>
            <Route path="/kids" element ={<PrivateRoute><KidsPage/></PrivateRoute>}/>
            <Route path="/aboutus" element ={<AboutPage/>}/>
            <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>}/>
            <Route path="/login" element ={<LogIn/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
        </>
    )
}