export interface IUsers {
    id:string,
    email:string,
    first_name:string,
    last_name:string,
    avatar:string
}

//data will be stored in the reducer
export interface IStatusizedUsers{
    users : IUsers[],
    isLoading : boolean,
}

interface IUsersAction{
    payload: IUsers[],
    type: string
}

export const UsersReducers = (state: IStatusizedUsers, action: IUsersAction): IStatusizedUsers=>{
    switch(action.type){
        case "started" : return {...state, isLoading : true}
        case "completed" : return {...state, isLoading:false, users: action.payload}
    }
    return {isLoading: true, users : []}
}

