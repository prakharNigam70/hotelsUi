import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface IUsers{
    id:string,
    email:string,
    first_name:string,
    last_name:string,
    avatar:string
}

const UsersSlice = createSlice({
    name : "UsersSlice",
    initialState : new Array<IUsers>(), // by simply giving [], it sometimes doesnot know what arry type is and it assumes to be of never datatype
    reducers : {
        completed(state: IUsers[], action : PayloadAction<IUsers[]>){
            return action.payload;
            //here we modify the whole state, so we can do it by directly returning as
        },
        started(_state: IUsers[]){ // here state is accompanied by an underscore, this is to tell don't give warning or error, even if the variable is not used in the code or function.
            return [];
        }
    }
})

export const {completed, started} = UsersSlice.actions;
export default UsersSlice.reducer;