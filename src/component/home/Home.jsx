import React from 'react'
import { APPLICATION_SHORT_NAME, PLATFORM_NAME } from '../../core/config';

// Styles
import './Home.scss'

// Component
import { Card } from '../../shared/component/Card';

function Home() {
    return (
        <div className='viewport'>
            <div className='flex flex-col self-start lg:hidden'>
                <h1 className='font-bold text-3xl'>{PLATFORM_NAME}</h1>
                <h2 className='text-3xl'>{APPLICATION_SHORT_NAME}</h2>
            </div>
            <Card type='sm' image='https://images.unsplash.com/photo-1501526029524-a8ea952b15be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
                alt='statistics'>
                <span>Stats</span>
            </Card>
            <Card image='https://images.unsplash.com/photo-1501526029524-a8ea952b15be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
                alt='statistics'>
                <span>Statistics</span>
            </Card>
        </div>
    )
}

export default Home