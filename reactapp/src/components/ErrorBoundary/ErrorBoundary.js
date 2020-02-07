import React, { Component } from "react";

//Error boundary, a higher order component, its a component which simply wraps a component with the goal of handling any error that components might throw.
class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }
   
    componentDidCatch = (error, info) => {
        this.setState({hasError: true, errorMessage: error});
    }
    render(){
        if(this.state.hasError){
            return <h1>{this.state.errorMessage}</h1>
        }else{
            return this.props.children;
        }
    }
}

export default ErrorBoundary;