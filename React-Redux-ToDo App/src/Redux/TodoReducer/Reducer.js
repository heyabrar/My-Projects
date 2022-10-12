import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS} from "./Constants"

const InitalData = {
    todo : [ ],
    status : false,
    isLoading : false,
    isError : false
}

export default function ReducerFunction (state =InitalData,action){
    switch(action.type){

        case GET_DATA_REQUEST : {
            return {
                ...state,
                isLoading : true,
            };
        };

        case GET_DATA_SUCCESS : {
             return {
                    ...state,
                    isLoading : false,
                    todo : action.payload,
            };
        };

        case GET_DATA_FAILURE : {
            return {
                ...state,
                todo : [ ],
                isLoading : false,
                isError : true
            }
        }        
        
        default : 
            return  state
    }
}