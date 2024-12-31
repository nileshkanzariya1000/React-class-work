import * as React from "react";
class StateXYZ extends React.Component{
    state={
        first:true  ,
        second:3.14,
        third:"hello",
        fourth:"red",
        fifth:"yellow",
    };
    constructor(){
        super();
        setTimeout(() => {
            this.setState({
                first:true  ,
        second:4.14,
        third:"hiii",
        fourth:"blue",
        fifth:"green",
            })
        }, 3000);
    }
    render(){
        const {first,second,third,fourth,fifth}=this.state;
        return(
            <div>
                <button disabled={first}>my button</button>
                <p style={{color:fourth}}>value of float variable is<b>{second}</b></p>
                <p style={{color:fifth}}>value of string variable is<b>{third}</b></p>
            </div>
        );
    }
}
export default StateXYZ;