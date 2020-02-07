import React from 'react';
import LearnReact from "./Learn_React/Learn-React"

const Coursetype = (props) => props.learnings.map((learning, index) => {
    return <LearnReact 
    name={learning.name} 
    duration={learning.duration} 
    key={index} 
    click ={() => props.clicked(index)}
    changed={(event) => props.changed(event, learning.id)}/>
})

export default Coursetype;