import { useHistory } from "react-router";
export default function ComponentA(){
    const history = useHistory();
    return (
        <>
        <div>Component A rendered</div>
        <button onClick={()=> history.goBack()}> Go Back</button>
        </>
    
    );
}