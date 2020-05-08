import React from 'react';

export function Button(props) {
    return (
        <button onClick={props.action} className="btn font-medium p-2 flex flex-row items-center">
            {props.children}
        </button>
    );
}

export function ButtonIcon(props) {
    return (
        <button onClick={props.action} className="btn btn-icon">
            {props.children}
        </button>
    );
}