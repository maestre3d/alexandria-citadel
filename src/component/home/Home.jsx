import React from 'react'
import { APPLICATION_SHORT_NAME, PLATFORM_NAME, APPLICATION_NAME } from '../../core/config';

// Styles
import './Home.scss'

// Component
import { Card } from '../../shared/component/Card';

function Home() {
    return (
        <div className='viewport items-center lg:p-8'>
            <div className='safezone w-full h-full lg:max-w-screen-xl'>
                <div className='flex flex-col self-start lg:hidden'>
                    <h1 className='font-bold text-3xl'>{PLATFORM_NAME}</h1>
                    <h2 className='text-3xl'>{APPLICATION_SHORT_NAME}</h2>
                </div>
                <Card className='banner w-full '>
                    <span className='flex-grow' />
                    <div className='flex flex-col m-8'>
                        <span className='text-3xl font-bold mb-1 lg:text-4xl'>Introducing {APPLICATION_NAME}</span>
                        <span className='text-md lg:text-lg'>Telemetry, statistics and many more.</span>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Home