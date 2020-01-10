// eslint-disable-next-line
import React from 'react';

const learnReact = (props) => {
    // here props is nothing but the property what we are passing from app js LearnReact element.
    // {props.name} this is the way to bind the data dynamically in react
    // {props.children} is the way to bind children dynamically, check app js for children element which is 'my hobby is to ...'
    return (
        <div>
            <h3>I am learning {props.name} and spent almost {props.timeSpent} mins till now!!!</h3>
            <h2>{props.children}</h2>
        </div>);
}

export default learnReact;