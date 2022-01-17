import React from "react";

interface IState{
    value: number
}
export default class Lifecycle extends React.Component<{}, IState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            value: 10
        }
        console.log("constructor");
    }
    static getDerivedStateFromProps() {
        console.log("getDerivedStateFromProps");
    }
    shouldComponentUpdate(props: {}, state:IState): boolean {
        console.log("shouldComponentUpdate");
        return true;
    }
    render() {
        console.log("render");
        return <div>render</div>
    }
    getSnapshotBeforeUpdate() {
        console.log("getSnapshotBeforeUpdate");
        return null;
    }
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }
    componentDidMount() {
        console.log("componentDidMount");
    }
}
