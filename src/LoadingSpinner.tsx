import { CircularProgress, makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
    container : {
        position : "fixed",
        top : 0,
        left : 0,
        width : "100%",
        height : "60%",
        display : "flex",
        alignItems : "center",
        justifyContent : "center"
    }
})

export default function LoadingSpinner(){
    const styles = useStyles();
    return(
        <div className={styles.container}>
            <CircularProgress size={100}/>
        </div>
    )
}