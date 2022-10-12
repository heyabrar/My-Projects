import { Input } from "@chakra-ui/react";
import { useState } from "react"

export default function AddTodo ({handleAdd}){
    const [text,setText] = useState('');

    const HandleAddTodo = ( ) =>{
        handleAdd(text)
        setText('')
    };

    
    return (
       <>
       <Input className="InputBox" type="text" placeholder="Add ToDo" value={text} onChange={(e) => setText(e.target.value)} m='5%'/>
       <button onClick={HandleAddTodo} className='AddButton'>Add</button>
       </>
    )
}