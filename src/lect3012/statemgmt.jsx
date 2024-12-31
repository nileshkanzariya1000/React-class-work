import * as React from "react";
class StateABC extends React.Component{
    state={
        first:true  ,
        second:3.14,
        third:"hello",
        fourth:"red",
        fifth:"yellow",
    };
    render(){
        const {first,second,third,fourth,fifth}=this.state;
        return(
            <div>
                <button disabled={first}>my button</button>
                <p style={{color:fourth}}>value of float variable is<b>{second}</b></p>
                <p>value of string variable is<b>{second}</b></p>
            </div>
        );
    }
}
export default StateABC;