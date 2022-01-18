import { useEffect, useState } from "react";
import "./App.css";

interface IUsers {
    id:string,
    email:string,
    first_name:string,
    last_name:string,
    avatar:string
}

export default function ComponentDidMount(){
    const [users, setUsers] = useState<IUsers[]>([]);
    const [isLoading, setLoading] = useState<boolean>(true);

    useEffect(()=>{
        async function api(){
            const response = await fetch("https://reqres.in/api/users");
            const json = await response.json();
            setUsers(json.data);
            setLoading(false);
        }

        api();
    }, [])

    if(isLoading){
        return(
            <div>The data is Loading</div>
        )
    }
    return(
        <div className="grid-container">{users.map(renderUser)}</div>
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