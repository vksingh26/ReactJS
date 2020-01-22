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

    stateHandler = (newName) =>{
        this.setState({
            apm: [{
                    name: newName,
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

    inputChangeHandler = (event) => {
        this.setState({
            apm: [{
                    name: 'WeChat',
                    revenue: "$6757.34"
                },
                {
                    name: event.target.value,
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
        const buttonStyle = {
            backgroundColor: 'orange',
            border: '1px solid orange',
            font: 'inherit',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '10px',
            color: 'white',
            boxShadow: '2px 5px 5px #ccc'
        }
        return (
        <div className="App" >
            <h1> First React App </h1>
            <button style={buttonStyle} onClick={this.stateHandler.bind(this, 'Alipay!!')} > Click To Change State </button>
            <LearnReact name={this.state.apm[0].name} revenue={this.state.apm[0].revenue}></LearnReact>
            <LearnReact name={this.state.apm[1].name} revenue={this.state.apm[1].revenue} 
            click={this.stateHandler.bind(this, 'APM: Alipay!!')} change={this.inputChangeHandler}></LearnReact>
            <LearnReact name={this.state.apm[2].name} revenue={this.state.apm[2].revenue}></LearnReact>
        </div>
        );
        //below line is used to create element using react createelement method, but its kind of cumbersome process if we want to create multiple elements
        //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This element is created using react.createElement method!!!'));
    }
}

export default App;