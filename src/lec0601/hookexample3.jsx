import { useState } from "react";
function StateExample3(){
    const [color,setColor]=useState("red");
    const [isBold, setisBold] = useState(false);
    const [isUnderlined, setisUnderlined] = useState(false);
    const [isItalic, setitalic] = useState(false);
    return(
        <div>
            <input type="radio" name="color" onChange={()=>setColor("yellow")}/>
            <input type="radio" name="color" onChange={()=>setColor("green")}/>
            <input type="radio" name="color" onChange={()=>setColor("blue")}/>
            <p style={{color:color,
                fontWeight: isBold ? "bold" : "normal",
                textDecoration: isUnderlined ? "underline" : "none",
                fontStyle: isItalic ? "italic" : "normal",
            }}>
                this is nilesh kanzariya</p>
            <input type="checkbox" name= "st" onChange={(e)=>setisBold(e.target.checked? true:false)}/>B
            <input type="checkbox" name ="st" onChange={(e)=>setisUnderlined(e.target.checked? true:false)}/>U
            <input type="checkbox" name ="st" onChange={(e)=>setitalic(e.target.checked? true:false)}/>I
        </div>
    );
}
export  default  StateExample3;