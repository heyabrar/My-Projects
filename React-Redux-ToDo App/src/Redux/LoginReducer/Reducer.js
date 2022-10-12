import { LOGIN_GET_FAILURE, LOGIN_GET_REQUEST, LOGIN_GET_SUCCESS } from "./ActionTypes";
import { getLocalData } from "../../Utiles/LocalStorageData";
import { SaveDataLS } from "../../Utiles/LocalStorageData";
const InitialData = {
    isAuth : false,
    token : getLocalData('LOGIN_TOKEN') || ' ' ,
    isAuthLoading : false,
    isAuthError : false
}

export default function Reducer (state = InitialData ,action){
    const {type,payload} = action;
    const TokenValue = payload;

    switch(type){
        case LOGIN_GET_REQUEST : {
            return {
                ...state,
                isAuthLoading : true,
            };
        };

        case LOGIN_GET_SUCCESS : {
       SaveDataLS('LOGIN_TOKEN', TokenValue);
            return {
                ...state,
                isAuthLoading : false,
                isAuth : true,
                token : TokenValue,
                isAuthError : false
            };
        };

        case LOGIN_GET_FAILURE : {
            return {
                ...state,
                isAuthLoading : false,
                token : '',
                isAuth : false,
                isAuthError : true
            };
        };

        default : 
        return state
    }
}