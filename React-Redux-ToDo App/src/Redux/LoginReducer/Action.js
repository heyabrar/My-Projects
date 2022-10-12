import { LOGIN_GET_FAILURE, LOGIN_GET_REQUEST, LOGIN_GET_SUCCESS } from "./ActionTypes";


export const LoginRequestAction = ( ) =>{
    return {
        type : LOGIN_GET_REQUEST
    };
};

export const LoginSucsessAction = (payload) =>{
    return {
        type : LOGIN_GET_SUCCESS,
        payload
    };
};


export const LoginFailuretAction = ( ) =>{
    return {
        type : LOGIN_GET_FAILURE
    };
};