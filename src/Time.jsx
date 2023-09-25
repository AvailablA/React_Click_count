import React from "react";
import { useState } from "react";

const Time = ()=>
{

    let curtime = new Date().toLocaleTimeString();

    const [ctime,settime]= useState(curtime);

    const Update = ()=>{
        curtime = new Date().toLocaleTimeString();
        settime(curtime);
    };

    return(
        <>
            <h1>{ctime}</h1>
            <button onClick={Update}>Get Time</button>
        </>
    )
}
export default Time;