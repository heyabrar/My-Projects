import axios from "axios";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import {DeleteTodoFailure, DeleteTodoRequest, DeleteTodoSuccess, GetDataAction , 
    GetDataFailureAction, GetDataRequestAction, PostTodoFailure, PostTodoReQuest, 
    PostTodoSuccess, ToggleTodoFailure, ToggleTodoRequest, ToggleTodoSuccess } from "../Redux/TodoReducer/Action";
import AddTodo from "../Pages/AddToDo";
import {AiFillCloseCircle,AiFillCheckCircle,AiFillDelete} from 'react-icons/ai'
import {BsToggleOff,BsToggleOn} from 'react-icons/bs'
import { Link } from "react-router-dom";
import { Flex, Text, Tooltip } from "@chakra-ui/react";

export default function Todo ( ){
    const {todo,isLoading,isError,isAuth} = useSelector((state)=> {
        return {
            todo : state.ReducerFunction.todo,
            isLoading : state.ReducerFunction.isLoading,
            isError : state.ReducerFunction.isError,
            isAuth : state.Reducer.isAuth
        };
    },shallowEqual);


    const Dispatch = useDispatch( );

//  <-------Get function -------->
    const handleGetData = ( ) =>{
        Dispatch(GetDataRequestAction ( ))
        axios.get(`http://localhost:3000/todoApp`).then((res)=>{
            Dispatch(GetDataAction(res.data));
        }).catch((err)=>{
            Dispatch(GetDataFailureAction)
        })
    };

    useEffect(( )=>{
        handleGetData( );
    },[ ]);
//  <------- Get function -------->


//  <-------Post function -------->

    const AddToPost = (title) =>{
        if(title){
            const payload = {
                title,
                status : false
            };
            Dispatch(PostTodoReQuest( ));
            return axios.post(`http://localhost:3000/todoApp`, payload)
            .then((res)=>{
                Dispatch(PostTodoSuccess(res.data));
            })
            .catch((err)=>{
                Dispatch(PostTodoFailure( ));
            })
        }
    }
    const handleAdd = (text) =>{
        AddToPost(text).then(( )=> handleGetData( ))
    };
//  <-------Post function -------->


//  <-------Delete function -------->

    const DeleteTodo = (id) =>{
        Dispatch(DeleteTodoRequest( ));
       return  axios.delete(`http://localhost:3000/todoApp/${id}`)
        .then((res)=>{
           Dispatch(DeleteTodoSuccess(res.data))
        })
        .catch((err)=>{
            Dispatch(DeleteTodoFailure( ));
        })
    }
    const handleDelete = (id) =>{
       DeleteTodo(id).then(( )=> handleGetData( ));
    }

//  <-------Delete function -------->


//  <-------Toggle function -------->

const ToggleTodo = (id,updatedStatus) =>{
    const payload  = {
        id,
        status : updatedStatus
    }
    Dispatch(ToggleTodoRequest( ));
    return axios.patch(`http://localhost:3000/todoApp/${id}`, payload)
    .then((res)=>{
        Dispatch(ToggleTodoSuccess(res.data))
    })
    .catch((err)=>{
        Dispatch(ToggleTodoFailure( ));
    })
}
const handleToggle = (id,status) =>{
    ToggleTodo(id,status).then(( )=> handleGetData( ));
}

//  <-------Toggle function -------->
    return (
        <>
            <div className='AddTodoCompo'><AddTodo handleAdd={handleAdd}/></div>  
            <h1 style={{textAlign :'center'}}>{isLoading && 'LOADING'}</h1>
            <h1>{isError && 'Something Went Wrong'}</h1>
            {todo.map((elem)=>{
                return (
                <Flex key={elem.id} border='1px solid black' justifyContent='space-between' w='40%' m='auto' mt='20px' p='15px' borderRadius='10px'>
                       <Link to={`/todo/${elem.id}`}> <Text  w='350px'>{elem.title} </Text></Link>
                        <Text style={elem.status?{color : 'green'}: {color :'red'}} className='Status'>{elem.status ? <AiFillCheckCircle/> : <AiFillCloseCircle/>} </Text>  
                        <Tooltip label={elem.status ? 'Mark As InComplete' : 'Mark As Complete'}>
                        <Text className="ToggleButton" onClick={( )=> handleToggle(elem.id,!elem.status)}>{elem.status ? <BsToggleOn/> :<BsToggleOff/>}</Text>
                        </Tooltip>
                        <Tooltip label='Delete Task'>
                        <Text  className='DeleteButton' onClick={( ) => handleDelete(elem.id)}><AiFillDelete/></Text>
                        </Tooltip>
                </Flex>)
            })}
        </>
    )
}