import { useState } from "react"

export const Button = ({text})=>{

   
    // const [button, setButton] = useState(text);
    
    return (
        <>
        <button className="bg-blue-500 border-2 border-blue-500 p-1 text-white rounded-md ">{text}</button>
        </>
    )
}