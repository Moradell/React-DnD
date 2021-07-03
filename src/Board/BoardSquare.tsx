import React from 'react'
import { Square } from '../Square';
import { canMoveKnight, moveKnight } from '../Game/Game';
import { ItemTypes } from '../ChestTypes';
import { useDrop } from 'react-dnd'

import classes from './Board.module.scss';

export function BoardSquare({ x, y, children }: any) {
    const black = (x + y) % 2 === 1
    const [{ isOver, canDrop }, drop] = useDrop(
        () => ({
          accept: ItemTypes.KNIGHT,
          drop: () => moveKnight(x, y),
          canDrop: () => canMoveKnight(x, y),
          collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
          })
        }),
        [x, y]
      )
  return (
      <div ref={drop} className={classes.boardSquare}>
            <Square black={black}>{children}</Square>
            {isOver && !canDrop && <div className={classes.boardSquare__container} style={{backgroundColor: 'red'}} />}
            {!isOver && canDrop && <div className={classes.boardSquare__container} style={{backgroundColor: 'yellow'}} />}
            {isOver && canDrop && <div className={classes.boardSquare__container} style={{backgroundColor: 'green'}} />}
      </div>
  )
}