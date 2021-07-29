import React, { useContext } from 'react'
import { counterContext} from './UseContextOne'

function Button({label}) {
    const counterObject = useContext(counterContext);
    console.log("counterObject >>>", counterObject);

    const { counter, clickMethod} = counterObject;
    return (
        <div>            
            <button onClick = {clickMethod}> {`${label} - ${counter}`} </button>
        </div>
    )
}

export default React.memo(Button);
