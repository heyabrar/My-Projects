import { DELETE_TODO_FAILURE, DELETE_TODO_REQUEST, DELETE_TODO_SUCCESS, GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS, POST_REQUEST, POST_SUCCESS, POST_TODO_FAILURE, POST_TODO_REQUEST, POST_TODO_SUCCESS, TOGGLE_TODO_FAILURE, TOGGLE_TODO_REQUEST, TOGGLE_TODO_SUCCESS } from "./Constants";

export const  GetDataRequestAction= ( ) =>  {
    return {
        type : GET_DATA_REQUEST,
    }
 };
 
export  function GetDataAction(payload) {
    return {
        type : GET_DATA_SUCCESS,
        payload,
    } 
};

export const GetDataFailureAction = ( ) =>{
    return {
        type : GET_DATA_FAILURE
    };
};

export const PostTodoReQuest = ( ) =>{
    return {
        type : POST_TODO_REQUEST
    }
}

export const PostTodoSuccess= (payload) =>{
    return {
        type : POST_TODO_SUCCESS,
        payload
    }
}

export const PostTodoFailure = ( ) =>{
    return {
        type : POST_TODO_FAILURE
    }
}

export const DeleteTodoRequest = ( ) =>{
    return {
        type : DELETE_TODO_REQUEST
    }
}

export const DeleteTodoSuccess = (payload) =>{
    return {
        type : DELETE_TODO_SUCCESS,
        payload
    }
}

export const DeleteTodoFailure = ( ) =>{
    return {
        type : DELETE_TODO_FAILURE
    }
}


export const ToggleTodoRequest = ( ) =>{
    return {
        type : TOGGLE_TODO_REQUEST
    }
}

export const ToggleTodoSuccess= ( ) =>{
    return {
        type : TOGGLE_TODO_SUCCESS
    }
}

export const ToggleTodoFailure = ( ) =>{
    return {
        type : TOGGLE_TODO_FAILURE
    }
}