import React from "react";

const Calc = () => {
    function add(a, b) {
        return (a + b)
    }
    function sum(a, b) {
        return (a * b)
    }
    function sub(a, b) {
        return (a - b)
    }
    function div(a, b) {
        return (a / b).toFixed(2)
    }
    return (
        <>
            <p>{add(30, 3)}</p>
            <p>{sum(30, 3)}</p>
            <p>{sub(30, 3)}</p>
            <p>{div(40, 3)}</p>
        </>
    )
}


const Calc2 = () => {
    function add(a, b) {
        return (a + b)
    }
    function sum(a, b) {
        return (a * b)
    }
    function sub(a, b) {
        return (a - b)
    }
    function div(a, b) {
        return (a / b).toFixed(2)
    }
    return (
        <>
            <p>{add(40, 3)}</p>
            <p>{sum(40, 3)}</p>
            <p>{sub(40, 3)}</p>
            <p>{div(50, 3)}</p>
        </>
    )
}

const Calc3 = () => {
    function add(a, b) {
        return (a + b)
    }
    function sum(a, b) {
        return (a * b)
    }
    function sub(a, b) {
        return (a - b)
    }
    function div(a, b) {
        return (a / b).toFixed(2)
    }
    return (
        <>
            <p>{add(50, 3)}</p>
            <p>{sum(50, 3)}</p>
            <p>{sub(50, 3)}</p>
            <p>{div(60, 3)}</p>
        </>
    )
}

export default Calc;
export {Calc2, Calc3};