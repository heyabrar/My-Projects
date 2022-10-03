import { useContext} from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import { UserContext } from "../Context/AuthContext";

export default function LogIn ( ){
    const [Email,setEmail] = useState('')
    const [Password,setPassword] = useState('')
    const [LoginInfo,setLoninInfo] = useState([ ]);
    const {isAuth,setIsAuth,theme} = useContext(UserContext);
    const nav = useNavigate( );
    
    const handleLogin = ( ) =>{
        if(Email === '' || Password === '')
        {
          return setIsAuth( );
        }
        else{
            nav('/')
        }

        const payload = {
            Email : Email,
            Password : Password,
        }
        
        const newInfo = [...LoginInfo,payload];
        setLoninInfo(newInfo);
        setIsAuth(!isAuth)
    };

    const sty = {
        light : {
            color : 'black',
            backgroundColor : 'white'
        },
        dark : {
            color : 'black',
            backgroundColor : 'white',
        }
    };

    return (
        <>
        <div className="dummy"></div>
        <h1 className="LoginH1">Welcome To ShopMe.com</h1>
        <div className="LoginDiv" style={theme === 'light' ? sty.light  : sty.dark}>
            <p>Email</p>
            <input type="text" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}  /> 
            <br /> <br />
            <p>Password</p>
            <input type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} />
            <br /> <br />
            <button onClick={handleLogin} className='LoginButton'>{isAuth? 'Log Out' : 'Log In'}</button>
        </div>
        
        </>
    )
}