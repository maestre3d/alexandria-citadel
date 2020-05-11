import React from 'react';
import PropTypes from 'prop-types';

// Component dependecies
import { Button } from './Button';

/**
 * FieldText exports an input text field component ready to be used inside a form,
 * contains useful features like clear button and icon before input span.
 * _*Requires Hooks to operate_
 * @param {string} props.icon Material Design icon type
 * @param {string} props.placeholder Input's placeholder
 * @param {string} props.label Aria label text
 * @param {boolean} props.required Specify if form is required
 * @param {string} props.name Input's name
 * @param {string} props.icon Material Design icon type
 * @param {string} props.className Extra CSS classes
 * @param {string} props.value Parent's hook's value
 * @param {function} props.changeHandler Parent's hook's state change handler
 * @param {object} props.inputRef Input's reference from parent
 * @param {*} props.children Child nodes
 */
export function FieldText(props) {
    const iconTemplate = props.icon !== undefined ? <span className='icon mr-1'>{props.icon}</span> : null

    // Clear input
    // Clearing middleware (Chain-of-responsability pattern)
    const onClearHandler = (e) => {
        e.target.value = ''
        props.onChangeHandler(e)
    }

    const clearIconTemplate = props.value !== '' ? 
    <Button type='icon' className='w-8 h-6 p-0 text-xs ml-1' action={onClearHandler}>
        <span className='icon text-sm'>close</span>
    </Button> : null

    return (
        <div className={props.className !== undefined ? 'field default focus:outline-none focus:shadow-outline ' + props.className : 
                'field default focus:outline-none focus:shadow-outline'}>
            {iconTemplate}
            <input className='input w-full focus:outline-none' type='text' placeholder={props.placeholder} value={props.value} 
                ref={props.inputRef} onChange={props.onChangeHandler} aria-label={props.label} aria-required={toString(props.required).toLowerCase()} 
                required={props.required} name={props.name} />
            {clearIconTemplate}
            {props.children}
        </div>
    );
}

FieldText.propTypes = {
    icon: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    required: PropTypes.bool,
    name: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.string,
    changeHandler: PropTypes.func,
    inputRef: PropTypes.object,
}