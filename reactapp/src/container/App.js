import React, { Component } from 'react';
import './App.css';
//import LearnReact from '../components/Learning/Learn_React/Learn-React';
//import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Coursetype from '../components/Learning/learning';
import Cockpit from '../components/Cockpit/Cockpit';
//import Radium from 'radium'
//import styled from 'styled-components';

class App extends Component {
    constructor(props){
        super(props);
        console.log('[App.js] constructor method!!')
    }
    state = {
        learnings: [
            {id:"1", name: "AngularJS", Duration: "60days"},
            {id:"2", name: "VueJS", revenue: "90days"},
            {id:"3", name: "ReactJS", revenue: "35days"}
        ],
        showContent: false
    }
     
    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps');
        return state;
    }

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }
    
    componentWillMount() {
        console.log('[App.js] componentWillMount');
    }

    stateHandler = (name) =>{
        this.setState({
            learnings: [{
                    name: name,
                    duration: "30days"
                },
                {
                    name: "VueJS",
                    duration: "45days"
                },
                {
                    name: "ReactJS",
                    duration: "40days"
                }
            ],
        })
    }

    inputChangeHandler = (event) => {
        this.setState({
            learnings: [{
                    name: 'AngularJS',
                    duration: "30days"
                },
                {
                    name: event.target.value,
                    duration: "45days"
                },
                {
                    name: "ReactJS",
                    duration: "$34467.33"
                }
            ]
        })
    }

    toggleContent = () =>{
        const doesShow = !this.state.showContent;
        this.setState({showContent: doesShow});
    }

    deleteContent = (contentIndex) =>{
        const learning = [...this.state.learnings];
        learning.splice(contentIndex, 1);
        this.setState({learning: learning})
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
            boxShadow: '2px 5px 5px #ccc',
            marginLeft: '25px',
            // ':hover': { this is the way to add psuedo class in react using radium
            //     backgroundColor: 'pink',
            //     color: 'white'
            // }
        }
        // let content = null;
        // if(this.state.showContent){
        //     content = (
        //         <div>
        //             <LearnReact name={this.state.apm[0].name} revenue={this.state.apm[0].revenue}></LearnReact>
        //             <LearnReact name={this.state.apm[1].name} revenue={this.state.apm[1].revenue} 
        //             click={this.stateHandler.bind(this, 'APM: Alipay!!')} change={this.inputChangeHandler}></LearnReact>
        //             <LearnReact name={this.state.apm[2].name} revenue={this.state.apm[2].revenue}></LearnReact>
        //         </div>
        //     );
        // }

        //work on generating list
        let listContent = null;
        if(this.state.showContent){
            listContent = 
                <Coursetype learnings={this.state.learnings}
                    clicked={this.deleteContent}
                    changed={this.inputChangeHandler}/>
            //this is the way to add psuedo classes in react using radium
            // buttonStyle.backgroundColor = 'green';
            // buttonStyle[':hover'] = {
            //     backgroundColor: 'lightgreen',
            //     color: 'white'
            // }
        }

        
        
        return (
          <div className="App">
            <Cockpit showContent={this.state.showContent} 
            learnings={this.state.learnings} clicked={this.toggleContent}/>
            <button style={buttonStyle} onClick={this.stateHandler.bind(this, "AngularJS!!")}>Click To Change State</button>
            {listContent}
          </div>
        );
        //below line is used to create element using react createelement method, but its kind of cumbersome process if we want to create multiple elements
        //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This element is created using react.createElement method!!!'));
    }
}

export default App;