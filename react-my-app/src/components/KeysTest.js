import React, { Component } from 'react'

export default class KeysTest extends Component {
    constructor(props){
        super(props);
        this.state = { 
            persons : []
        }
    }

    componentDidMount() {
        this.setState({
            persons : [
                {
                    name : 'vinu',
                    age : 21
                },
                {
                    name : 'soumya',
                    age : 25
                },
                {
                    name : 'viresh',
                    age : 20
                }
            ]
        })
    }
    

    render() {
        return (
            <div>
                {
                    this.state.persons.map((elem, i) => {
                        return <div key = {i}> NAME : {elem.name} - AGE : {elem.age} </div>
                    })
                }
            </div>
        )
    }
}
