import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const IncDec = () => {

    let num1 = 0;
    const [num, setNum] = useState(num1);
    const incNum = () => {
        setNum(num + 1);
    }
    const decNum = () => {
        if (num > 0) {
            setNum(num - 1)
        } else {
            setNum(0)
        }
    }
    
    return <>
        <div className="IncDec">
            <div className="main_div">
                <div className="center_div">
                    <h1> {num} </h1>
                    <div className="btn_div">
                        <Button onClick={incNum}> <AddIcon /> </Button>
                        <Button onClick={decNum}> <DeleteIcon /> </Button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default IncDec;