import React, { Component } from 'react';
import LearnReact from "./Learn_React/Learn-React"

class Coursetype extends Component { 
    // static getDerivedStateFromProps(props, state) { commenting as we have not initialised any state here.
    //     console.log('[Learning.js] getDerivedStateFromProps!!!');
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Learning.js] shouldComponentUpdate!!!');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Learning.js] getSnapshotBeforeUpdate!!!');
        return {message: 'Snapshot!!!'};
    }

    // componentWillUpdate(){
    //     console.log('[Learning.js] was there in the older version!!!');
    // }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Learning.js] componentDidUpdate!!!');
        console.log(snapshot);
        
    }

    render() {
        console.log('[Learning.js] rendering...');
        return this.props.learnings.map((learning, index) => {
            return <LearnReact 
            name={learning.name} 
            duration={learning.duration} 
            key={index} 
            click ={() => this.props.clicked(index)}
            changed={(event) => this.props.changed(event, learning.id)}/>
        })
    }
}

export default Coursetype;