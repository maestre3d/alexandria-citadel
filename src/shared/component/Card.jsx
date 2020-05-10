import React from 'react';

export function Card(props) {
    if (props.type === 'small' || props.type === 'sm') {
        return (
        <div className={props.className !== undefined ? 'card card-sm '+ props.className : 'card card-sm'}>
            <img src={props.image}
                    alt={props.alt} className='rounded-full w-24 h-24 shadow-lg' />
            {props.children}
        </div>)
    } else if (props.type === 'medium' || props.type === 'md') {
        return (
            <div className={props.className !== undefined ? 'card max-w-md '+ props.className : 'card max-w-md'}>
                <img src={props.image} alt={props.alt} className='rounded-lg' />
                {props.children}
            </div>
        )
    } else {
        return (
            <div className={props.className !== undefined ? 'card '+ props.className : 'card'}>
                {props.children}
            </div>
        )
    }
}