import React, { Component } from 'react';
import './App.css';
import LearnReact from './Learn_React/Learn-React';

class App extends Component {
    state = {
        apm: [
            {name: "Alipay", revenue: "$35734"},
            {name: "Wechat", revenue: "$44565"},
            {name: "Klarna", revenue: "$46733"}
        ]
    }

    stateHandler = () =>{
        this.setState({
            apm: [{
                    name: "Wechat",
                    revenue: "$6757.34"
                },
                {
                    name: "Klarna",
                    revenue: "$28445.65"
                },
                {
                    name: "Alipay",
                    revenue: "$34467.33"
                }
            ]
        })
    }

    render(){
        return (
        <div className = "App" >
            <h1> First React App </h1>
            <button class="btn btn-primary" onClick={this.stateHandler} > Click To Change State </button>
            <LearnReact name={this.state.apm[0].name} revenue={this.state.apm[0].revenue}></LearnReact>
            <LearnReact name={this.state.apm[1].name} revenue={this.state.apm[1].revenue}></LearnReact>
            <LearnReact name={this.state.apm[2].name} revenue={this.state.apm[2].revenue}></LearnReact>
        </div>
        );
        //below line is used to create element using react createelement method, but its kind of cumbersome process if we want to create multiple elements
        //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This element is created using react.createElement method!!!'));
    }
}

export default App;