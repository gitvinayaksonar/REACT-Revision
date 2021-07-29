import React, { Component } from 'react'

function Foo(WrappedComp){
    return class extends Component {
        constructor(props){
            super(props);
            this.state = {
                count : 0
            }
        }

        increment = () => {
            console.log("hi");
            this.setState((prevState) => ({
                count : prevState.count + 1
            }))
        }

        render(){
            return <WrappedComp count = {this.state.count} incr = {this.increment} {...this.props}/>
        }
    }
}

export default Foo;