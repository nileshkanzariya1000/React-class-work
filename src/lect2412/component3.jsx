import * as React from "react";
class InputTest extends React.Component{
    render(){
        return(
            <div>
                <input type="text" placeholder="Enter your name"/>
                <br/>
                <input type="checkbox" />
                <label>checkbox</label>
                <br/>
                <input type="radio"/>
                <label>radio button</label>
                <br/>
                <input type="color"/>
                <label>color selection</label>
                <br/> 
                <input type="button"/>
                <label>button</label>
                <br/>
                <input type="file"/>
                <label>file</label>
                <br/>

            </div>
        );
    }
}
export default InputTest;