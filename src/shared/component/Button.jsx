import React from 'react';

export function Button(props) {
    return (
        <button onClick={props.action} className="btn rounded-full p-1 text-lg font-bold">
            {props.children}
        </button>
    );
}

export function ButtonIcon(props) {
    return (
        <button onClick={props.action} className="btn rounded-full p-1 text-xl w-12 h-12">
            <span className="icon">{props.icon}</span>
        </button>
    );
}