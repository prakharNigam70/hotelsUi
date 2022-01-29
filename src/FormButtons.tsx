import { Fab, makeStyles, Theme } from "@material-ui/core";
import { useHistory } from "react-router";


const useStyles = makeStyles<Theme, {}>({
    buttons:{
        display : "flex",
        flexDirection : "row",
        justifyContent : "flex-end"
    },
    button : {
        margin : "0 10px"
    }
})


export interface IButtonItem{
    label : string,
    onClick : () => void
}

interface IProps{
    primary : IButtonItem,
    secondary? : IButtonItem,
    tertiary? : IButtonItem
}

export default function FormButtons(props : IProps){
    const styles = useStyles();
    const history = useHistory();
    return(
        <div className={styles.buttons}>
            {props.primary && <Fab type="submit" id="primaryButton" variant="extended" color="primary" className={styles.button}
             onClick={props.primary.onClick}>{props.primary.label}</Fab>}
            
            {props.secondary && <Fab variant="extended" id="secondaryButton" color="secondary" className={styles.button}
             onClick={props.secondary.onClick}>{props.secondary.label}</Fab>}
            
            {props.tertiary && <Fab variant="extended" id="tertiaryButton" className={styles.button}
            onClick={props.tertiary.onClick} >{props.tertiary.label}</Fab>}
            
            <Fab onClick={()=> history.push("/HotelsUI")} id="homeButton" variant="extended" className={styles.button}>Home</Fab>
        </div>
    )
}