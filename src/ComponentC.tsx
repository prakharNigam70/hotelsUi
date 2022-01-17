import { useHistory } from "react-router";
export default function ComponentC(){
    const history = useHistory();
    return(
        <>
            <div>ComponentC rendered</div>
            <button onClick={()=> history.push("/a")}>Go to A</button>
        </>
    )
}