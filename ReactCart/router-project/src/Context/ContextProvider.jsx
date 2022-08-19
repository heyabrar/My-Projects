import { useState } from "react"
import { createContext } from "react"

export const Context = createContext()

export default function ContextProvider({children}){
    const [cartData,setCartData] =useState([ ]);
    return (
        <div>
            <Context.Provider value={{cartData,setCartData}}>
                {children}
            </Context.Provider>
        </div>
    )
}