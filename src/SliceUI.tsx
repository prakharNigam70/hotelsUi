import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppState } from "./AppState"
import { IUsers, completed, started } from "./UsersSlice"

export default function SliceUI(){
    const dispatch = useDispatch()
    const users: IUsers[] = useSelector((state : AppState) => state.UsersSlice)
    useEffect(()=>{
        async function api(){
            const response = await fetch("https://reqres.in/api/users");
            const json = await response.json();
            dispatch(completed(json.data))
        }
        dispatch(started())
        api();
    } , [])

    return(
        <div className="grid-container">{users.map(renderUser)}</div>
    )
}
function renderUser(user: IUsers):JSX.Element{
    return(
        <div className="grid-item" key={user.id}>
            <img src={user.avatar}/>
            <div>{user.email}</div>
            <div>{`${user.first_name} ${user.last_name}`}</div>
        </div>
    )
}