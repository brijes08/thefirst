import React, { useState, useEffect } from 'react';


const CovidData = () => {

    const [state, setState] = useState([]);
    const data = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        setState(actualData.statewise);
    }

    useEffect(() => {
        data()
    }, []);

    return <>
        <div className="cvd_dashbd">
            <table>
                <thead>
                    <tr>
                        <th>STATE</th>
                        <th>CONFIRMED</th>
                        <th>RECOVERED</th>
                        <th>DEATHS</th>
                        <th>ACTIVE</th>
                        <th>UPDATED</th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((val, i) => {
                        return (
                            <tr key={i}>
                                <td>{val.state}</td>
                                <td>{val.confirmed}</td>
                                <td>{val.recovered}</td>
                                <td>{val.deaths}</td>
                                <td>{val.active}</td>
                                <td>{val.lastupdatedtime}</td>
                            </tr>
                            
                        )
                    })}
                </tbody>
            </table>
        </div>
    </>
}

export default CovidData;




