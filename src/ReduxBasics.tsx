import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppState } from "./AppState"
import { IStatusizedUsers, IUsers } from "./UsersReducers"

export default function ReducBasics(){
    const dispatch = useDispatch()
    const statusizedUsers: IStatusizedUsers = useSelector((state : AppState) => state.UsersReducers)
    useEffect(()=>{
        async function api(){
            const response = await fetch("https://reqres.in/api/users");
            const json = await response.json();
            dispatch({type:"completed", payload: json.data})
        }
        dispatch({type: "started" })
        api();
    } , [dispatch])


    if(statusizedUsers.isLoading){
        return(
            <div>The data is Loading</div>
        )
    }
    return(
        <div className="grid-container">{statusizedUsers.users.map(renderUser)}</div>
    )
}
function renderUser(user: IUsers):JSX.Element{
    return(
        <div className="grid-item" key={user.id}>
            <img src={user.avatar} alt=""/>
            <div>{user.email}</div>
            <div>{`${user.first_name} ${user.last_name}`}</div>
        </div>
    )
}