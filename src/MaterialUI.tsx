import { AppBar, Button, Card, CardContent, CardMedia, CircularProgress, Fab, makeStyles, TextField, Theme, Typography } from "@material-ui/core";

interface IMaterialUIProps{
    background : string
}

const useStyles = makeStyles<Theme, IMaterialUIProps>({
    root: {//root is a class, which can be given as style.root
      color: 'red',
      backgroundColor : (props) => props.background
    //   color: (props) => props.color,
    }
  })

export default function MaterialUI(){
    const style = useStyles({background : "orange"});//useStyles is a hook
    return(
        <div>
            {/* Loading Spinner */}
            <CircularProgress/>

            <TextField id="outlined-basic" label="Outlined" variant="outlined" error={true} helperText="Incorrect Entry"/>
            <Typography variant="h4" gutterBottom component="div" className={style.root}>
                h4. Heading
            </Typography>

            {/* Buttons */}
            <Button variant="contained" color="primary">Contained</Button>
            <Fab variant="extended">
                Navigate
            </Fab>

            {/* cards */}
            <Card>
                <CardMedia
                    component="img"
                    height="194"
                    image="https://b.zmtcdn.com/data/pictures/2/308322/cf86dbd8b8ca4d40682c7713f112cc07_featured_v2.jpg"
                />
                <CardContent>
                    <Typography variant="body2" color="primary">
                        Haldirams
                    </Typography>
                </CardContent>
                <AppBar position="static">
                    
                </AppBar>
            </Card>
        </div>
    )
}