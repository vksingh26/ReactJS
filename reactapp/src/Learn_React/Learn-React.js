// eslint-disable-next-line
import React from 'react';

const learnReact = (props) => {
    // here props is nothing but the property what we are passing from app js LearnReact element.
    // {props.name} this is the way to bind the data dynamically in react
    // {props.children} is the way to bind children dynamically, check app js for children element which is 'my hobby is to ...'
    //stateful and stateless/dump components
    //below (return method) is the stateless component as its not maintaining any state
    //in the next page i.e learn-react.js has the stateful component as it maitains the state of the component.
    return (
        <div>
            <h2>{props.name} made a revenue of {props.revenue}</h2>
        </div>);
}

export default learnReact;