import React, { Component } from 'react'

class Square extends Component {
    constructor(props){
        console.log("constructor");
        super(props);
        this.paraRef = React.createRef();

        this.state = {
            width : 0, 
            height : 0,
            inputValue : '',
            person : {
                firstname : null,
                lastname : null
            },            
        }
    }

    componentWillMount() {
        console.log("componentWillMount >>");
    }

    componentDidMount() {
        console.log(" componentDidMount >>");
    }
    
    // shouldComponentUpdate(prevProps, prevState){
    //     console.log("shouldComponentUpdate>>", prevProps, prevState);

    //     if(this.state.person.firstname === prevState.person.firstname && this.state.person.lastname === prevState.person.lastname){
    //         return false;
    //     }
    //     return true;
    // }

    componentDidUpdate(prevProps, prevState) {
        console.log(" componentDidUpdate method>", prevProps, prevState);
    }
    
    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }  

    setWidth = (w) => {
        this.setState((prevState) => ({
            width: prevState.width + 5
        }))
    }

    setHeight = (h) => {
        this.setState((prevState) => ({
           height: prevState.height + 5
        }))
    }

    setPerson = (p) => {
        this.setState({
            person : {
                firstname : p.firstname,
                lastname : p.lastname
            }
        })
    }

    onInpChange = (e) => {
        this.setState({ inputValue : e.target.value })
        this.paraRef.current.style.color = 'blue';        
    }

    render(){
        console.log(" render method ");
        return (
            <div> 
                {`Square with side ${this.props.side} cms has a width of ${this.state.width} and ${this.state.height}`} 
                <button onClick = {() => this.setWidth(5)}> width + 5 </button>
                <button onClick = {() => this.setHeight(5)}> height + 5 </button> <br />

                Person is  {`${this.state.person.firstname} and ${this.state.person.lastname}`}
                <button onClick = { () => this.setPerson({ firstname : "Vinayak", lastname : "Sonar"})}> set Person </button>
                <br />
                <input type = 'text' value = {this.state.inputValue} onChange = {this.onInpChange} />
                <p ref = {this.paraRef}> Entered text {this.state.inputValue} </p>
            </div>
        )
    }
}

Square.defaultProps = {
    side : 15
}

export default Square;