import { makeStyles, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import FormButtons from "./FormButtons";
import firebase from "firebase";
import { UserContext } from "./UserProvider";
import { useContext } from "react";

const useStyles = makeStyles({
    container : {
        display : "flex",
        alignItems : "center", 
        justifyContent : "space-evenly",
        height : "100%",
        width : "100%",
        textAlign : "center",
        flexDirection : "column"
    }
})

export default function Profile(){
    const styles = useStyles();
    const history = useHistory();
    const context = useContext(UserContext)

    const signOut = async()=>{
        await firebase.auth().signOut();
        history.push("/");
    }

    return(
        <div className={styles.container}>
        <Typography variant="h3">Welcome to Profile Page</Typography>
        {context?.email && <Typography variant="h3">{context?.email}</Typography>}
        {context?.displayName && <Typography variant="h3">{context?.displayName}</Typography>}
        {context?.uid && <Typography variant="h3">{context?.uid}</Typography>}
        <FormButtons
            primary={{
                label : "Sign Out",
                onClick : signOut
            }}
        />
        </div>
    )
}