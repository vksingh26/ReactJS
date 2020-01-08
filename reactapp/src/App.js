import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render(){
        return (
        <div className = "App" >
            <header className = "App-header">
                <h1> First React App </h1> 
            </header> 
        </div>
        );
        //below line is used to create element using react createelement method, but its kind of cumbersome process if we want to create multiple elements
        //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This element is created using react.createElement method!!!'));
    }
}

export default App;