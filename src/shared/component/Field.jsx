import React from 'react';
import { ButtonIcon } from './Button';

export function Field(props) {
    const type = props.type !== null ? props.type : 'text'
    const iconTemplate = props.icon !== null ? <span className='icon mr-1'>{props.icon}</span> : null

    // Clear input
    // Clearing middleware (Chain-of-responsability pattern)
    const onClear = (e) => {
        e.target.value = ''
        props.handleChange(e)
    }

    const clearIconTemplate = props.value !== '' ? 
    <ButtonIcon className='w-8 h-6 p-0 text-xs ml-1' action={onClear}>
        <span className='icon text-sm'>close</span>
    </ButtonIcon> : null

    return (
        <div className={props.className !== undefined ? 'field default focus:outline-none focus:shadow-outline ' + props.className : 
                'field default focus:outline-none focus:shadow-outline'}>
            {iconTemplate}
            <input name='' className="input w-full focus:outline-none" type={type} placeholder={props.placeholder} value={props.value} onChange={props.handleChange} />
            {clearIconTemplate}
            {props.children}
        </div>
    );
}