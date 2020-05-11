import React from 'react';
import PropTypes from 'prop-types';

// Style
import './style/Banner.scss';

// Component dependecies
import { Card } from './Card';

/**
 * Banner exports a card banner component.
 * @param {string} props.image Background image URL
 * @param {string} props.heading Heading text
 * @param {string} props.description Description text
 * @param {string} props.className Extra CSS classes
 */
export function Banner(props) {
    return (
        <Card className='banner w-full text-white' image='https://images.unsplash.com/photo-1587327903256-2265e70b5660?fit=crop&w=1950&q=80'>
            <div className='bg-mask rounded-lg flex flex-col w-full h-full'>
                <span className='flex-grow' />
                <div className='flex flex-col m-8'>
                    <span className='text-3xl font-bold mb-1 lg:text-4xl'>{props.heading}</span>
                    <span className='text-md lg:text-lg'>{props.description}</span>
                </div>
            </div>     
        </Card>
    )
}

Banner.propTypes = {
    image: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string,
    className: PropTypes.string
}