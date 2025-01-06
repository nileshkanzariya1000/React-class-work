import { useState } from "react";
function StateExample2(){
const [name,setName]=useState("rku");
const [age,setage]=useState(23);
return(
    <div>
        <h1>{name}</h1>
        <input 
        type="text"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
          <h1>{age}</h1>
        <input 
        type="number"
        value={age}
        onChange={(e)=>setage(e.target.value)}
        />
    </div>
);
}
export default StateExample2;