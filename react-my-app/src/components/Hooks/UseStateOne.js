import React, { useState } from 'react'

export default function UseStateOne() {
    const [ person, setPerson ] = useState({ name : ''});

    const changeHandler = (e) => {
        setPerson({ name : e.target.value })
    }

    return (
        <div>
            <input value = {person.name} placeholder = 'hi' onChange = {(e) => changeHandler(e)} />
            <p> {person.name} </p>
        </div>
    )
}
