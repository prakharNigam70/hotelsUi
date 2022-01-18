import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import './App.css';

interface IUsers {
    id:string,
    email:string,
    first_name:string,
    last_name:string,
    avatar:string
}

interface IState{
    users : IUsers[],
    isLoading : boolean,
    searchString: string
}


export default class UserClass extends Component<{}, IState>{
    constructor(props:{}){
        super(props);
        this.state = {
            users: [],
            isLoading : true,
            searchString : ""
        }
    }

    public async componentDidMount(){
        const response = await fetch("https://reqres.in/api/users");
        const json = await response.json();
        this.setState({users : json.data, isLoading:false})
    }

    public render():JSX.Element{
        if(this.state.isLoading){
            return(<div>Content is Loading</div>)
        }
        return(
            <>
                <input type="text" 
                onChange={(e)=> this.setState({searchString : e.target.value})}/>
                {/* <div className="grid-container">
                    {this.state.users.map(this.renderUser)}
                </div> */}
                <Grid container spacing={2}>
                    {
                    this.state.users.filter((x) => 
                        x.first_name.toLowerCase()
                        .includes(this.state.searchString.toLowerCase()) ||

                        x.last_name.toLowerCase()
                        .includes(this.state.searchString.toLowerCase())
                    )
                    .map(this.renderUser)
                    //filter the elements according to search, then map over them
                    }
                </Grid>
            </>
        )
    }
    private renderUser(user: IUsers):JSX.Element{
        return(
            <Grid item key={user.id} xs={4}>
                <img src={user.avatar}/>
                <div>{user.email}</div>
                <div>{`${user.first_name} ${user.last_name}`}</div>
            </Grid>
        )
    }
}