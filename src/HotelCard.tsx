import { Card, CardContent, CardMedia, makeStyles, Theme, Typography } from "@material-ui/core";
import { IHotel } from "./HotelsSlice";

const useStyles = makeStyles<Theme, {}>({
    container:{
        height : "350px"
    }
})

export default function HotelCard(props : IHotel){
    const styles = useStyles();
    return(
        <Card className={styles.container}>
            <CardMedia
                component="img"
                image={props.featured_image}
                height = {250}
                alt={props.name}
            />
            <CardContent>
                <Typography variant="h6">{props.name}</Typography>
                <Typography variant="body2">{props.cuisines}</Typography>
            </CardContent>
        </Card>
    )
}