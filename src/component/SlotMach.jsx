import React from "react";
import Gamedata from "./GameData";

const Slot = (props) => {

    const { x, y, z } = props;

    if ((props.x === props.y) && (props.y === props.z)) {
        return <>
            <h1>{x} {y} {z}</h1>
            <h1>This is Matched</h1>
            <hr />
        </>
    } else {
        return <>
            <h1>{x} {y} {z}</h1>
            <h1>This is Not Matched</h1>
            <hr />
        </>
    }
};

const Gamehtml = () => {
    return (
        < >
            <div className="slotmachmain">
                {Gamedata.map((val) => {
                    return <React.Fragment key={val.id}>
                        <div className="slot_design">
                            <Slot x={val.x} y={val.y} z={val.z} />
                        </div>
                    </React.Fragment>
                })}
            </div>
        </>
    );
}

export default Gamehtml;