import React, { Component } from 'react';
import GridSquare from '../grid-square/grid-square.js'
import './grid.css'

class Grid extends Component {
    constructor (props) {
        super(props);
        this.state = {
            height: 5, 
            width: 5,
            characterLoc: '0,0',
            npcLoc: '1,2'
        };
    }

    render() {
        const gridsquares = [];
        for (let y=0; y<this.state.height; y++) {
            for (let x=0; x<this.state.width; x++) {
                const coords = x + ',' + y
                gridsquares.push(
                    <GridSquare 
                    key={coords} 
                    coords={coords}
                    contents={coords === this.state.characterLoc ? "@" : ''}
                     />
                )
            }
        }
        return (
            <div className="grid" >{gridsquares}</div>
        )
    }
}

export default Grid;