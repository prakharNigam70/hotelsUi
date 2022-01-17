import { useState } from "react";

interface IProps{
    init : number
}

export default function FuncProps(props : IProps){//just pass the props in the paranthesis, and we are done with declaration of props.
    const [num, setNum] = useState<number>(props.init)
    return(
        <>
            <button onClick={e=> setNum(num+1)}>increment by 1</button>
            <div>{num}</div>
        </>
    )
}