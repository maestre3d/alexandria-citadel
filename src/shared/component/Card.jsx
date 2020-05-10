import React from 'react';

export function Card(props) {
    let card = 
    <div className={'card '+ props.className}>
        {props.children}
    </div>;

    if (props.type === 'small' || props.type === 'sm') {
        card =
        <div className={'card card-sm '+ props.className}>
            <img src={props.image}
                    alt={props.alt} className='rounded-full w-24 h-24 shadow-lg' />
            {props.children}
        </div>
    }

    return (
        card
    );
}