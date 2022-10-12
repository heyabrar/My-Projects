import { Box, Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar ( ) {
    const {isAuth, token} = useSelector((state)=>{
        return {
            isAuth : state.Reducer.isAuth,
            token : state.Reducer.token
        }
    })
    const LsToken = JSON.parse(localStorage.getItem('LOGIN_TOKEN'))
    return (
        <>
        <Flex justifyContent='space-around' border='2px solid black' p='10px'>
            <Link to='/'>Home</Link>
            <Link to='/login'>Log In</Link>
            <Link to='/about'>About</Link>
        </Flex>
        </>
    )
}