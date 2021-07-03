import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Board } from './Board';
import { observe } from './Game/Game';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const root = document.getElementById('root')

observe((knightPosition) =>
    ReactDOM.render(
        <DndProvider backend={HTML5Backend}>
            <Board knightPosition={knightPosition} />
        </DndProvider>,
        root
    )
);
