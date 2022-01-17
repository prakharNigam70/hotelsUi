import { useRef,useState, createContext } from "react";
import FuncProps from "./FuncProps";
import Context from "./Context"

export const tokenContext = createContext<string>("");

export default function Hooks(){
    const [name, setName] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null)
    return(
        <>
            <input type="text" onChange={(e)=> setName(e.target.value)}/>
            <div>Hello {name}</div>
            <FuncProps init={7}/>
            {/* {console.log(inputRef)} */}
            <input type="text" ref={inputRef} onChange={e => alert(inputRef.current?.value)} />
            {/* <input type="text" ref={inputRef} onChange={e => console.log(inputRef)} /> */}
            <tokenContext.Provider value={name}>
                <Context/>
            </tokenContext.Provider>
        </>
    )
}