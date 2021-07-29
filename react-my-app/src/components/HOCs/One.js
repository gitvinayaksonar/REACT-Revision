import React from 'react'
import Foo from './HOComp'

function One(props) {
    return (
        <div>
            I am a Wrapped component <br />
            {props.count}
            <button onClick = {props.incr}> increment </button>
        </div>
    )
}

export default Foo(One);