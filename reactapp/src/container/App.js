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
            {id:"1", name: "AngularJS", duration: 60},
            {id:"2", name: "VueJS", duration: 90},
            {id:"3", name: "ReactJS", duration: 35}
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
    
    // componentWillMount() { this belongs to the older version of react in new version react doesnot support it.
    //     console.log('[App.js] componentWillMount');
    // }

    shouldComponentUpdate(prevProps, prevState) {
        console.log('[App.js] shouldComponentUpdate!!!');
        return true;
    }

    componentDidUpdate() {
        console.log('[App.js] componentDidUpdate!!!');
    }

    stateHandler = (name) =>{
        this.setState({
            learnings: [{
                    name: name,
                    duration: 30
                },
                {
                    name: "VueJS",
                    duration: 45
                },
                {
                    name: "ReactJS",
                    duration: 40
                }
            ],
        })
    }

    inputChangeHandler = (event) => {
        this.setState({
            learnings: [{
                    name: 'AngularJS',
                    duration: 30
                },
                {
                    name: event.target.value,
                    duration: 45
                },
                {
                    name: "ReactJS",
                    duration: 40
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

//i have completed this till props and ref and i am going to start new project with the understading of this project.