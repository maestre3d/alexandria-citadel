import React from 'react';
import PropTypes from 'prop-types';

/**
 * Button exports a button component.
 * @param {string} props.type Type, options: 'icon'/'i' or empty
 * @param {function} props.action Action handler
 * @param {string} props.className Extra CSS classes
 * @param {*} props.children Child nodes
 */
export function Button(props) {
    switch(props.type) {
        case 'icon' || 'i':
            return (
                <button onClick={props.action} className={props.className !== undefined ? 'btn btn-icon default ' + props.className : 'btn btn-icon default'}>
                    {props.children}
                </button>
            )
        default:
            return (
                <button onClick={props.action} className={props.className !== undefined ? 'btn default font-medium p-2 flex flex-row items-center '+
                    props.className : 'btn default font-medium p-2 flex flex-row items-center'}>
                    {props.children}
                </button>
            )
    }
}

Button.propTypes = {
    type: PropTypes.string,
    action: PropTypes.func,
    className: PropTypes.string
}