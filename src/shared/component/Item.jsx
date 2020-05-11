import React from 'react';
import PropTypes from 'prop-types';

/**
 * Item exports an button-like component specially crafted to be placed
 * inside either vertical or horizontal lists.
 * @param {string} props.className Extra CSS classes
 * @param {function} props.action Action handler
 * @param {*} props.children Child nodes
 */
export function Item(props) {
    return (
        <button className={props.className !== undefined ? 'list-item '+ props.className : 'list-item'} onClick={props.action}>
            {props.children}
        </button>
    );
}

Item.propTypes = {
    className: PropTypes.string,
    action: PropTypes.func
}