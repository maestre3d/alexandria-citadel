import React from 'react';

export function ListItem(props) {
    return (
        <button className='list-item' onClick={props.action}>
            {props.children}
        </button>
    );
}