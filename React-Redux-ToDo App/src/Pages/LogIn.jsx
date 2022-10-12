import { Box, Button, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import {useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { json, Link, useNavigate } from "react-router-dom";
import { LoginRequestAction, LoginSucsessAction } from "../Redux/LoginReducer/Action";
import { LOGIN_GET_FAILURE } from "../Redux/LoginReducer/ActionTypes";

export default function LogIn ( ) {
    const [email,setEmail] = useState('eve.holt@reqres.in')
    const [password,setPassword] = useState('');
    const nav = useNavigate( );
    const {token,isAuthLoading,isAuthError,isAuth} = useSelector((state)=>{
        return {
            isAuth : state.Reducer.isAuth,
            token : state.Reducer.token,
            isAuthError : state.Reducer.isAuthError,
            isAuthLoading : state.Reducer.isAuthLoading
        }
    });
    const Dispatch = useDispatch( );

    const handleLogin  = (email,password) =>{
        const payload = {
            email,
            password,
        };
        Dispatch(LoginRequestAction( ));
        return axios.post(`https://reqres.in/api/login`, payload)
        .then((res)=>{
            Dispatch(LoginSucsessAction(res.data));
        })
        .catch((e)=>{
            Dispatch(LOGIN_GET_FAILURE( ))
        })
    }

    const LSTOKEN = JSON.parse(localStorage.getItem('LOGIN_TOKEN'));
    
    const handleOnLogin = (email,password) =>{
        handleLogin(email,password);
    };
console.log(isAuth)
    return (
        <>
            <Box w='20%' m='auto'>
                <Text textAlign='center'>{isAuthLoading && 'Loading'}</Text>
                <Text textAlign='center'>{isAuthError && 'Loading'}</Text>
                <Text>{isAuthError && 'SomeThing Went Wrong'}</Text>
                <Input placeholder="Enter Email" mt='50px' type='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <Input placeholder="Enter Password" mt='20px' type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
               <Link to={isAuth ? '/' : '/login'}><Button onClick={( )=>handleOnLogin(email,password)} mt='30px'>Log In</Button></Link>
            </Box>
        </>
    )
}