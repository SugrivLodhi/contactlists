import React,{useState} from 'react'

function Timer() {
    let time = new Date().toLocaleTimeString();
    const [ctime, setTime] = useState(time);
    const timeHandler = () =>{
        let time = new Date().toLocaleTimeString();
        setTime(time);
    }

     setInterval(timeHandler,1000);
    return (
        <div>
           <h1>{time}</h1> 
           <h2>Updated Time</h2>
        </div>
    )
}

export default Timer
