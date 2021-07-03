import React from 'react';

import { Knight } from '../Knight';
import { Square } from '../Square';
import { BoardSquare } from './BoardSquare';

import { moveKnight, canMoveKnight } from '../Game/Game';

import classes from './Board.module.scss';

function renderSquare(i: any, knightPosition: any) {
    const x = i % 8
    const y = Math.floor(i / 8)
    return (
      <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
        <BoardSquare x={x} y={y}>
          {renderPiece(x, y, knightPosition)}
        </BoardSquare>
      </div>
    )
  }

function renderPiece(x: number, y: number, [knightX, knightY]: number[]) {
    if (x === knightX && y === knightY) {
        return <Knight />
    }
}

export function Board({ knightPosition }: any):JSX.Element {
    const squares = [];
    for (let i = 0; i < 64; i++) {
        squares.push(renderSquare(i, knightPosition));
    };
    return (
        <div className={classes.board}>
            {squares}
        </div>
    );
}
