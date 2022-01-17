import React from "react";
import Add from "./Add";
import Increment from "./Increment";
export default class MainClass extends React.Component{
    render(){
        return(
            <div>
                <div>Main Class</div>
                <Add a={10} b={5}/>
                <Increment init={5}/>
            </div>
        )
    }
}