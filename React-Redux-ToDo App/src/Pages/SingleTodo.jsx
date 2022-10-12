import { Flex, Text, Tooltip } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react"
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import {GrAdd} from 'react-icons/gr'
import { Link, useParams } from "react-router-dom";

const getSingleData = (id) =>{
    return axios(`http://localhost:3000/todoApp/${id}`);
}
export default function SingleTodo ( ) {
    const [state,setState] = useState({ });
    const params = useParams( );

    useEffect(( ) =>{
        getSingleData(params.id).then((res)=>{
            setState(res.data)
        })
    },[params.id]);
    return (
        <>
          <Flex key={state.id} border='1px solid black' justifyContent='space-between' w='40%' m='auto' mt='20px' p='15px' borderRadius='10px' alignItems='center'>
                        <Text>{state.title} </Text>
                        <Text style={state.status?{color : 'green'}: {color :'red'}} fontSize='25px'>{state.status ? <AiFillCheckCircle/> : <AiFillCloseCircle/>} </Text>  
                        <Text>{state.status ? 'Task Is Completed' : 'Task Is Incomplete'}</Text>
                        <Tooltip label='Add Task'>
                            <Link to='/'><Text><GrAdd/></Text></Link>
                        </Tooltip>

                </Flex>
        </>
    )
}