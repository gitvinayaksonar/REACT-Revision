import React, {useReducer} from 'react'

const reducerFunc = (state, action) => {
    switch (action.type){
        case 'CHANGE_NAME':
            return {...state, name : 'Chetan'}
        default:
            return state;
    }
}

export default function UseReducerOne() {
    const [ person, dispatch] = useReducer(reducerFunc, { name  : 'vinayak'})

    return (
        <div>
            Hi { person.name } <br />
            <button onClick =  {() => dispatch({ type : 'CHANGE_NAME'})} > change name </button>
        </div>
    )
}


