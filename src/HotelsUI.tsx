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
        padding : "10px"
    },
    searchContainer : {
        height : "85%",
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
        fontSize : "1rem"
    },
    buttons : {
        flex : 0.2,
        display : "flex",
        justifyContent : "space-evenly",
        paddingLeft : "10px"
    },
    button : {
        color : "white"
    }
})

export default function HotelsUI(){
    const styles = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const context = useContext(UserContext);
    const [searchString, setSearchString] = useState("");

    const hotels : IHotel[] = useSelector((state : AppState) => state.HotelsSlice)

        useEffect(() => {
            async function api() {
            
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            
            var graphql = JSON.stringify({
                query: "{\n  hotels {\n    id, name, cuisines, featured_image\n  }\n}",
                variables: {}
            })
            var requestOptions: RequestInit = {
                method: 'POST',
                headers: myHeaders,
                body: graphql,
                redirect: 'follow'
            };
            
            const response = await fetch("https://dry-reef-15191.herokuapp.com/graphql", requestOptions);
            const json: {data:{hotels: IHotel[]}} = await response.json();
            dispatch(completed(json.data.hotels));
            }
            dispatch(started());
            api();
        }, [dispatch]);
    



    // useEffect(()=>{
    //     async function api(){
    //         const response = await fetch("/hotel.json");
    //         const json = await response.json();
    //         dispatch(completed(json.map((x: { restaurant: IHotel }) => x.restaurant)))
    //     }
    //     dispatch(started());
    //     api();
    // } , [dispatch])

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
                    {context?.uid && <Button className={styles.button} id="profileButton" onClick={()=> history.push("/Profile")}>PROFILE</Button>}
                    {!context?.uid && <Button className={styles.button} id="signupButton" onClick={()=> history.push("/SignUp")}>SIGN UP</Button>}
                    {!context?.uid && <Button className={styles.button} id="loginButton" onClick={()=> history.push("/Login")}>LOGIN</Button>}
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