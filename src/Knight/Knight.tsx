import React from 'react';
import { ItemTypes } from '../ChestTypes';
import { useDrag } from 'react-dnd'
import classes from './Knight.module.scss';

export function Knight() {
    const [{isDragging}, drag] = useDrag(() => ({
      type: ItemTypes.KNIGHT,
      collect: monitor => ({
        isDragging: !!monitor.isDragging(),
      }),
    }))
  
    return (
        <div
            ref={drag}
            className={classes.knight}
            >
                ♘
        </div>
    )
  }
