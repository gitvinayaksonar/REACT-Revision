import React, { useRef, useState} from 'react'

export default function UseRefOne() {
    const inpRef = useRef(null);
    const [ value, setvalue ] = useState('');

    const clickHandler = () => {
        inpRef.current.focus();
    }   

    return (
        <div>
             <label onClick = {clickHandler}> value : </label>
             <input value = {value} ref = {inpRef} onChange = {(e) => setvalue(e.target.value)} />           
        </div>
    )
}
