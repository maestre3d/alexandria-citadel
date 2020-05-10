import React from 'react';

export function ListItem(props) {
    return (
        <button className={props.className !== undefined ? 'list-item '+ props.className : 'list-item'} onClick={props.action}>
            {props.children}
        </button>
    );
}