import { Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import LogIn from "../Pages/LogIn";
import SingleTodo from "../Pages/SingleTodo";
import Todo from "../Pages/Todo";
import PrivateRoutes from "./PrivateRoute";

export default function AllRoutes ( ){
    // const isAuth = useSelector((state)=>{
    //     return state.Reducer.isAuth
    // })
    // console.log(isAuth)
    return (
        <>
        <Routes>
            <Route path="/" element={ <PrivateRoutes><Todo/></PrivateRoutes>}/>
            <Route path="/login" element={<LogIn/>}/>
            <Route path="/about" element={<h1>About</h1>}/>
            <Route path="/todo/:id" element={<PrivateRoutes><SingleTodo/></PrivateRoutes>}/>
        </Routes>
        </>
    )
}