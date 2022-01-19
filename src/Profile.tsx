import { Card, CardActionArea, CardContent, makeStyles, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import FormButtons from "./FormButtons";
import firebase from "firebase";
import { UserContext } from "./UserProvider";
import { useContext } from "react";

const useStyles = makeStyles({
    container: {
        width : "60vw",
        height : "50vh",
        margin : "50px auto"
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

{/* <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card> */}