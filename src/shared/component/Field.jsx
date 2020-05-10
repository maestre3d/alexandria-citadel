import React from 'react';

export function Field(props) {
    const type = props.type !== null ? props.type : 'text';
    const iconTemplate = props.icon !== null ? <span className='icon mr-1'>{props.icon}</span> : null;
    return (
        <div className='flex flex-row items-center field default focus:outline-none focus:shadow-outline'>
            {iconTemplate}
            <input className="input w-full focus:outline-none" type={type} placeholder={props.placeholder} />
        </div>
    );
}