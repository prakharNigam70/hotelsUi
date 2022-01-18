import { AppBar, Button, Container, Grid, InputBase, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { AppState } from './AppState';
import HotelCard from './HotelCard';
import { completed, IHotel, started } from './HotelsSlice';
import { UserContext } from './UserProvider';


const useStyles = makeStyles({
    grid : {
        padding : "30px"
    },
    rootContainer : {
        display : "flex",
        alignItems : "center",
        padding : "15px"
    },
    searchContainer : {
        height : "90%",
        display : "flex",
        background : "rgba(255,255,255,0.15)",
        flex : 0.8,
        borderRadius : "2rem"
    },
    iconContainer : {
        display : "flex",
        alignItems : "center",
        padding : "0 15px"
    },
    textbox : {
        color : "white",
        fontSize : "1.2rem"
    },
    buttons : {
        flex : 0.2,
        display : "flex",
        justifyContent : "space-evenly",
        paddingLeft : "10px"
    }
})

export default function HotelsUI(){
    const styles = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const context = useContext(UserContext);
    const [searchString, setSearchString] = useState("");

    const hotels : IHotel[] = useSelector((state : AppState) => state.HotelsSlice)
    useEffect(()=>{
        async function api(){
            const response = await fetch("/hotel.json");
            const json = await response.json();
            dispatch(completed(json.map((x: { restaurant: IHotel }) => x.restaurant)))
        }
        dispatch(started());
        api();
    } , [dispatch])

    return(
        <>
        <AppBar position="static">
            <Container maxWidth="xl" className={styles.rootContainer}>
                <div className={styles.searchContainer}>
                    <div className={styles.iconContainer}>
                        <SearchIcon />
                    </div>
                    <InputBase 
                    fullWidth
                    className={styles.textbox} 
                    placeholder='Seach...' 
                    inputProps={{"area-label" : "search"}}
                    onChange={(e) => setSearchString(e.target.value)}
                    />
                </div>
                <div className={styles.buttons}>
                    {context?.uid && <Button onClick={()=> history.push("/Profile")}>PROFILE</Button>}
                    {!context?.uid && <Button onClick={()=> history.push("/SignUp")}>SIGN UP</Button>}
                    {!context?.uid && <Button onClick={()=> history.push("/Login")}>LOGIN</Button>}
                </div>
            </Container>
        </AppBar>
        <Grid container spacing={2} className={styles.grid}>
            {hotels.filter(x => x.name.toLocaleLowerCase().includes(searchString.toLocaleLowerCase())).map((hotel) =>(
                <Grid item xs={4} justifyContent='space-evenly' alignItems='center'>
                    <HotelCard {...hotel}/>
                </Grid>
            ))}
        </Grid>
        </>
    )

}