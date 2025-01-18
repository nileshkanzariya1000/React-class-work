import * as React from "react";
function fetchUserData(){
    return new Promise ((resolve)=>
    {
        setTimeout(()=>{
            resolve({x:"RKU STUDENT",y:1});

        },5000
    );
    });
}

function Apisimulation(){
    const [name,setName]=React.useState("Loading...");

const [id,setId]=React.useState("Loading...");

React.useEffect(()=>{
    fetchUserData().then((abc)=>{
    setName(abc.x);
    setId(abc.y)
    });
});
return(
    <div>
        User:{name}<br>
        </br>
        Id:{id}
    </div>
);
}

export default Apisimulation;