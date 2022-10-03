import { useState } from "react";
import { createContext } from "react"

export const UserContext = createContext( );

export default function AuthContextProvider ({children}){
    const [AddToCart,SetAddToCart] = useState([ ]);
    const [isAuth,setIsAuth] = useState(false);
    const [theme,setTheme] = useState('light');

    const LogOutBtn =  ( ) =>{
        setIsAuth(!isAuth)
        console.log(isAuth)
    };

    const toggleTheme = ( ) =>{
        setTheme(theme === 'light' ? 'dark' : 'light');
        console.log(theme) 
    };
    
    return(
        <>
        <UserContext.Provider value={{isAuth,setIsAuth,AddToCart,SetAddToCart,theme,toggleTheme,LogOutBtn}}>
            {children}
        </UserContext.Provider>
        </>
    )
}