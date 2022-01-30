import { useState } from "react"

export default function SimpleJest(){
    const [name, setName] = useState("")
    return(
        <>
        <input type="text" name="name" onChange={(e)=> setName(e.target.value)} />
        <label>{name}</label>
        </>
    )
}