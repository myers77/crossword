import React, { Component } from 'react';
import { map } from 'ramda';
import mydata from '../../puzzle.json'

const rowStyle = {
  display: 'flex',
  flexDirection: 'row',
}

const squareStyleBlack = {
  height: 30,
  width: 30,
  backgroundColor: 'black',
  border: '1px solid dimgray',
}

const squareStyleWhite = {
  height: 30,
  width: 30,
  backgroundColor: 'white',
  border: '1px solid dimgray',
}

const gridStyle = {
}

class PuzzleGrid extends Component {
  printRow = row =>
    <div style={rowStyle}>
      {map(square =>
        square === '-'
        ? <div style={squareStyleWhite}></div>
        : <div style={squareStyleBlack}></div>
      , row)}
    </div>

  render() {
    return (
      <div style={gridStyle}>
        {map(row => this.printRow(row), mydata.diagram)}
      </div>
    );
  }
}

export default PuzzleGrid;
