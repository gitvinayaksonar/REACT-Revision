import React, { useState, useCallback, useMemo } from 'react'

export default function UseCallbackOne() {
    console.log(" i am called whenever state changes");

    const [ counterOne, setcounterOne ] = useState(0);
    const [ counterTwo, setcounterTwo ] = useState(5);
    const [ value, setValue ] = useState(0); 

    // useCallback stops re-initialization
    const clickHandlerCounterOne = useCallback(() => {
        console.log(" I am clickHandlerCounter One");
        setcounterOne(prevState => prevState + 1)
    }, [ counterOne ])

    const clickHandlerCounterTwo = useCallback(() => {
        console.log(" I am clickHandlerCounter Two");
        setcounterTwo(prevState => prevState + 5)
    }, [ counterTwo ])

    const changeHandler = (e) => {
        setValue(e.target.value)
    }

    const computeValue = (n) => {
        for(let i = 0; i <= 1000; i++){
            console.log("hi...");
        }
        return 2*n;
    }

    // whenver u change the state of other state variable, it will execute 
    // line by line and reaches this line.
    // const doubledNum = computeValue(value);

    // Function takes value and calculates and gives result
    // If some other state variable changes and y i hv to recompute this ?
    // So only depedent state variable changes, it shd re-compute 

    // useMemo stops re-computation if other state variable changes 
    const doubledNum = useMemo(() => {
        return computeValue(value);
    }, [ value ])

    return (
        <div>
            <h1> {counterOne} </h1>
            <button onClick = {clickHandlerCounterOne}> increment counter one </button> <br />

            <h1> {counterTwo} </h1>
            <button onClick = {clickHandlerCounterTwo}> increment Counter two</button> <br />

            <input type = 'number' value = {value} onChange = {(e) => changeHandler(e)} />
            <h1 style = {{ color : 'red'}}> {doubledNum} </h1>
        </div>
    )
}
