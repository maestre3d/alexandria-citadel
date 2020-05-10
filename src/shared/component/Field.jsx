import React from 'react';

export function Field(props) {
    const type = props.type !== null ? props.type : 'text';
    const iconTemplate = props.icon !== null ? <span className='icon mr-1'>{props.icon}</span> : null;
    return (
        <div className={props.className !== undefined ? 'field default focus:outline-none focus:shadow-outline ' + props.className : 
                'field default focus:outline-none focus:shadow-outline'}>
            {iconTemplate}
            <input className="input w-full focus:outline-none" type={type} placeholder={props.placeholder} value={props.value} onChange={props.handleChange} />
        </div>
    );
}