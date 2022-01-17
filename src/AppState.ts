import { combineReducers, createStore } from "redux";
import { UsersReducers } from "./UsersReducers";
import {devToolsEnhancer} from "redux-devtools-extension"
import { WebsiteReducer } from "./WebsiteReducer";
import UsersSlice from "./UsersSlice";
import HotelsSlice from "./HotelsSlice";

//this is our datatbase
const rootReducer = combineReducers({

    //this is our table
    UsersReducers: UsersReducers,
    WebsiteReducer : WebsiteReducer,
    //tableName : tableFunc
    UsersSlice : UsersSlice,
    HotelsSlice : HotelsSlice
})

//it can be used in components to dispatch
export type AppState = ReturnType<typeof rootReducer>;

//it can be used in AppState in combineReducers
export const configureStore = createStore(rootReducer, {}, devToolsEnhancer({}));