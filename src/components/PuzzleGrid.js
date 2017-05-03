import React, { Component } from 'react';
import { addIndex, map } from 'ramda';
import keydown from 'react-keydown';
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

const mapIndexed = addIndex(map);

class PuzzleGrid extends Component {
  constructor() {
    super();
    this.state = {
      activeSquare: [0, 0],
    }
  }

  printRow = (row, y) =>
    <div style={rowStyle}>
      {mapIndexed((square, x) =>
        square === '-'
        ? <div style={squareStyleWhite}>{
          (y === this.state.activeSquare[0] || x === this.state.activeSquare[1])
          ? 'Y' : 'n'}</div>
        : <div style={squareStyleBlack}></div>
      , row)}
    </div>

  render() {
    return (
      <div style={gridStyle}>
        {mapIndexed((row, y) => this.printRow(row, y), mydata.diagram)}
      </div>
    );
  }
}

export default PuzzleGrid;
