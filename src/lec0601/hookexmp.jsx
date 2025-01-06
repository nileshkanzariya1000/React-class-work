import {useState} from "react";
function StateExample(){
    const [name]=useState("hello");
    return <div>
        {name}
    </div>
}
export default StateExample;