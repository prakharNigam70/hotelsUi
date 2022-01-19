import { Card, CardActionArea, CardContent, makeStyles, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import FormButtons from "./FormButtons";
import firebase from "firebase";
import { UserContext } from "./UserProvider";
import { useContext } from "react";

const useStyles = makeStyles({
    container: {
        width : "50vw",
        height : "50vh",
        margin : "50px auto",
        backgroundColor : "#d6d8db"
    },
    innerContainer : {
        height : "100%",
        display : "flex",
        flexDirection : "column",
        justifyContent : "space-evenly"
    },
    contentContainer : {
        display : "flex",
        flexDirection : "column",
        justifyContent : "space-evenly"
    }

})

export default function Profile() {
    const styles = useStyles();
    const history = useHistory();
    const context = useContext(UserContext)

    const signOut = async () => {
        await firebase.auth().signOut();
        history.push("/");
    }

    return (
        <Card className={styles.container}>
            <CardActionArea className={styles.innerContainer}>
                <Typography variant="h4">Welcome to Profile Page!</Typography>
                <CardContent className={styles.contentContainer}>
                    {context?.displayName && <Typography variant="h6">Name : {context?.displayName}</Typography>}
                    {context?.email && <Typography variant="h6">Email : {context?.email}</Typography>}
                    {context?.uid && <Typography variant="h6">ID : {context?.uid}</Typography>}
                </CardContent>
                <FormButtons
                    primary={{
                        label: "Sign Out",
                        onClick: signOut
                    }}
                />
            </CardActionArea>
        </Card>
    )
}
