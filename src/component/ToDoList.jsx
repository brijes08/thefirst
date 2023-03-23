import React, { useState } from "react";
import ToDoItems from "./ToDoItems";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const ToDoList = () => {

    const [inputVal, setInputVal] = useState('');
    const [addItem, setAddItem] = useState([]);

    const InputFeild = (e) => {
        setInputVal(e.target.value)
    }

    const onSubmits = (e) => {
        if (!inputVal) {
            alert("Please Add Item")
        } else {
            setAddItem((oldarr) => {
                return [...oldarr, inputVal];
            });
            setInputVal('');
        }
    };

    const deleteVal = (id) => {
        setAddItem((oldarr) => {
            return oldarr.filter((arrElm, index) => {
                return index !== id;
            })
        })
    }

    return <>

        <div className="ToDoItems">
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1> ToDo List </h1>
                    <br />
                    <input type="text" value={inputVal} placeholder="Add a Items" onChange={InputFeild} />
                    <Button onClick={onSubmits}> <AddIcon /> </Button>
                    <ol>
                        {addItem.map((addedItem, index) => {
                            return <ToDoItems key={index} id={index} text={addedItem} onSelect={deleteVal} />
                        })}
                    </ol>
                </div>
            </div>
        </div>
    </>
}

export default ToDoList;