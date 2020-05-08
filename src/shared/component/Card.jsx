import React from 'react';

export function CardSmall(props) {
    return (
        <div className='card card-sm'>
            <img src={props.image}
                    alt={props.alt} className='rounded-full w-24 h-24 shadow-lg' />
            {props.children}
        </div>
    );
}