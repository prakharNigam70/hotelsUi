import React from "react"

interface IProps{
    init: number
}

interface IState{
    value: number
}

export default class Increment extends React.Component<IProps,IState>{
    constructor(props: IProps){
        super(props);
        this.state = {
            value : props.init
        }
    }

    render(){
        return(
            <div>
                <button onClick={()=> this.setState({value : this.state.value+1})}>Increment by 1</button>
                <div>{this.state.value}</div>
            </div>
        )
    }
}