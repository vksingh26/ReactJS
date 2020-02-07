import React from 'react';
const cockpit = (props) =>{
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
    const classes = ['red', 'bold'].join(' ');
    return(
        <div>
            <h1> First React App </h1>
            <div className={classes}>
                <p>Css is handled using dynamic css</p>
            </div>
            
            <button style={buttonStyle} onClick={props.clicked}>Toggle Type 1</button>
        </div>
    )
}

export default cockpit;