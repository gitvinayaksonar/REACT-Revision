import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types'

export default class PropTypesExample extends Component {
    
    applyBCColor = (color) => {
        const elem = document.getElementById('container');
        ReactDOM.findDOMNode(elem).style.backgroundColor = color;
    }
    
    render() {
        return (
            <> 
                <div id = 'container' style = {{ margin : '10px', display : 'flex', justifyContent : 'center' , border : '2px solid blue'}}>
                    Name is : {`${this.props.name}`} <br />
                    Age is : {`${this.props.age}`} <br />
                    Native is : {`${this.props.native.city} with a pin of ${this.props.native.pin}`}    <br />
                    {` Output of func is ${this.props.func(2)}`}    <br />                        
                </div>
                <button onClick = {() => this.applyBCColor('yellow')}> apply bc color </button>
            </>
        )
    }
}

PropTypesExample.defaultProps = {
    name : "vinayak",
    age : 30,
    native : { city : "jkd", pin : 587301 },
    func : (v) => v + 123
}

PropTypesExample.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    native : PropTypes.object,
    func : PropTypes.func
}