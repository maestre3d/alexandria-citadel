import React from 'react';

export function Button(props) {
    return (
        <button onClick={props.action} className={props.className !== undefined ? 'btn default font-medium p-2 flex flex-row items-center '+
            props.className : 'btn default font-medium p-2 flex flex-row items-center'}>
            {props.children}
        </button>
    );
}

export function ButtonIcon(props) {
    return (
        <button onClick={props.action} className={props.className !== undefined ? 'btn btn-icon default ' + props.className : 'btn btn-icon default'}>
            {props.children}
        </button>
    );
}