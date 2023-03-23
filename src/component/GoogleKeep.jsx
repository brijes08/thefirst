import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';

const GoogleKeep = () => {

    const [fields, setFields] = useState({
        title: '',
        content: ' ',
    });

    const [state, setState] = useState([]);

    const EventChange = (e) => {
        setFields({ ...fields, [e.target.name]: e.target.value })
    }

    const SubmitData = () => {
        setState([...state, fields])
        setFields({
            title: '',
            content: ' ',
        })
    }

    const deleteVal = (id) => {
        setState((currElm) => {
            return (currElm.filter((element, i) => {
                return i !== id;
            }))
        })
    }



    return (
        <>
            <div className="ToDoItems">
                <div className="main_div">
                    <div className="listData">
                        {state.map((val, i) => {
                            return (
                                <div className="list_bx" key={i} id={i}>
                                    <div className="todocontent">
                                        <h3>{val.title}</h3>
                                        <p>{val.content}</p>
                                    </div>
                                    <Button className="dlt_btn" onClick={() => deleteVal(i)}>
                                        <img src="https://cdn2.iconfinder.com/data/icons/apple-inspire-white/100/Apple-64-512.png" alt="" />
                                    </Button>
                                </div>
                            )
                        })
                        }


                    </div>
                    <div className="center_div">
                        <br /><h1> ToDo List </h1><br />
                        <input type="text" placeholder="Tittle" name="title" value={fields.title} onChange={EventChange} /><br />
                        <textarea placeholder="Content" name="content" value={fields.content} onChange={EventChange} ></textarea><br />
                        <Button onClick={SubmitData}> <AddIcon /> </Button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default GoogleKeep;