import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

export default function PrivateRoutes ({children}) {

    const {token} = useSelector((state)=> {
        return {
            token : state.Reducer.token
        }
    })
    if(!token){
        return <Navigate to='/login'/>
    }
    return children
}