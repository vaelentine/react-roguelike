import React, { Component } from 'react';
import './grid-square.css'

function GridSquare(props) {
    return <div className="grid-square" >
        {props.contents}
    </div>
}

export default GridSquare;