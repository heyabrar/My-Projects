import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { UserContext } from "./AuthContext"

export default function PrivateRoute({children}){
    const {isAuth} = useContext(UserContext);
    if(!isAuth){
        return <Navigate to={'/login'}/>
    }
    return children
}   