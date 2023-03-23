import React, {useState} from "react";
import Clock from 'react-live-clock';

function Fetchdate() {
    const fname = 'Brijesh';
    const lname = 'Singh';
    let date = new Date().toLocaleDateString();

    const time = new Date().toLocaleTimeString();
    const [GetTime, settTime] = useState(time);

    const updateTime = () => {
        let timeupdt = new Date().toLocaleTimeString();
        settTime(timeupdt)
    }

    // setInterval(updateTime, 1000);

    return (
        <>
            <h1>{`My Name is ${fname} ${lname}`}</h1>
            <h1><Clock /></h1>
            <p>Current Date is {date}</p>
            <p>Current Time is {GetTime}</p><button onClick={updateTime}> Get Time</button>
        </>
    )
};

export default Fetchdate;