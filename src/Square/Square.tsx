import React from 'react';

import cn from 'classnames';
import classes from './Square.module.scss';

export function Square({ black, children }: any):JSX.Element {
    return (
        <div className={cn(classes.square__black, {
            [classes.square__white]: black,
        })}>
            {children}
        </div>
    );
}
