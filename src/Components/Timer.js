import React, { useEffect, useState } from 'react'

function Timer({setStop,questionNo}) {
    const[timer,setTimer] = useState(30);

    useEffect(()=>{
        if(timer===0) return setStop(true);
        const interVal = setInterval(()=>{
            setTimer((prev)=>prev-1);
        },1000);
        return ()=>clearInterval(interVal);
    },[setStop,timer]);

    useEffect(()=>{
        setTimer(30);
    },[questionNo]);

  return timer;
}

export default Timer
