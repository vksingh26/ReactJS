// eslint-disable-next-line
import React, { Component } from 'react';
import './Learn-React.css';

import styled from 'styled-components';

const StyledDiv = styled.div `
    width: 40%;
    margin: 16px auto;
    border: 1px solid #eeeeee;
    box-shadow: 0 2px 3px #cccccc;
    padding: 16px;
    text-align: center;
`;
class LearnReact extends Component {
    render(){
        console.log('[Learn-React] rendering...')
        // here props is nothing but the property what we are passing from app js LearnReact element.
        // {props.name} this is the way to bind the data dynamically in react
        // {props.children} is the way to bind children dynamically, check app js for children element which is 'my hobby is to ...'
        //stateful and stateless/dump components
        //below (return method) is the stateless component as its not maintaining any state
        //in the next page i.e learn-react.js has the stateful component as it maitains the state of the component.
        // const rand = Math.random();
        // if(rand > 0.7){
        //     throw new Error('Oops!!! Something went wrong');
        // }
        return (
            // <div className="Person">
            <StyledDiv>
                <h2 onClick = {this.props.click}> {this.props.name}!!! made a revenue of {this.props.revenue} </h2> 
                <input type = "text" onChange={this.props.changed} value={this.props.name}/> 
            </StyledDiv >
            // < /div>
        );
    }
}

export default LearnReact;