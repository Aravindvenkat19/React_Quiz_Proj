import { useState, useEffect } from "react";

export default function QuestionTimer({timeout, onTimeout, mode }) {
   const [remainingTime, setRemainingTime] = useState(timeout)

   useEffect(() => {
    console.log("SET TIMEOUT")
   const timer = setTimeout(onTimeout,timeout)

   return () => {
     clearTimeout(timer);
   };

   },[onTimeout,timeout])

   useEffect(() => {
    console.log("SET INTERVAL")
    const interval = setInterval(() => {
        setRemainingTime(prevRemainingTime => prevRemainingTime -100 )
       },100) 

    return () => {
        clearInterval(interval);
    };

   },[])
 
    return <progress id="question-time" max={timeout} value={remainingTime} className={mode} />
}