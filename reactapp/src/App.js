import React, { Component } from 'react';
import './App.css';
import LearnReact from './Learn_React/Learn-React';

class App extends Component {
    render(){
        return (
        <div className = "App" >
             <h1> First React App </h1>
            <LearnReact name="React" timeSpent="120"/>My hobby is to learn new technologies!!!
        </div>
        );
        //below line is used to create element using react createelement method, but its kind of cumbersome process if we want to create multiple elements
        //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This element is created using react.createElement method!!!'));
    }
}

export default App;