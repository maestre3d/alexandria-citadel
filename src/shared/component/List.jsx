import React from 'react';

export function ListItem(props) {
    return (
        <button className={'list-item '+props.className} onClick={props.action}>
            {props.children}
        </button>
    );
}