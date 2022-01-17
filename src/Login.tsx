import { useHistory } from "react-router-dom";
import Authentication, { IAuthentication } from "./Authentication";
import firebase from "firebase";

export default function Login(){
    const history = useHistory()
    const onSubmit = async(login : IAuthentication) => {
        try{
            await firebase.auth().signInWithEmailAndPassword(login.email, login.password);
        }catch(e){
            throw e;
        }
    }
    return(
        <>
            <Authentication isUserNameVisible={false} title="Welcome to Login Page"
            onSubmit={onSubmit}
            tertiary={{
                label : "SignUp",
                onClick : ()=> history.push("/SignUp")
            }}
            />
        </>
    )
}