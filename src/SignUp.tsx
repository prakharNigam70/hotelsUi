import firebase from 'firebase';
import { useHistory } from "react-router";
import Authentication, { IAuthentication } from "./Authentication";

export default function SignUp(){
    const history = useHistory()
    const onSubmit = async(signUp : IAuthentication) => {
        try{
            const userData = await firebase.auth().createUserWithEmailAndPassword(signUp.email, signUp.password)
            await userData.user?.updateProfile({displayName : signUp.userName});
        }catch(e){
            throw e;
        }
    }
    return (
        <div>
            <Authentication isUserNameVisible={true} title="Welcome to SignUp page"
            onSubmit={onSubmit}
            tertiary={{
                label : "Login",
                onClick : ()=> history.push("/Login")
            }}
            height='65%'
            />
        </div>
    )
}