import React, { useState } from 'react'
import Button from './Button';

export const counterContext = React.createContext();

export default function UseContextOne() {
    const [ counter, setCounter ] = useState(0);    
    const onClickMethod = () => {
        setCounter(prevState => prevState + 1)
    }

    return (
        <div>
            { counter }
            <counterContext.Provider value = { { counter, clickMethod : onClickMethod } }>
                {/* <Button label = "increment" clickHandler = {onClickMethod}/> */}
                <Button label = "increment" />
            </counterContext.Provider>
        </div>
    )
}
