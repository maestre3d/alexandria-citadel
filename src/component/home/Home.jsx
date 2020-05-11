import React from 'react'
import { APPLICATION_NAME } from '../../core/config';

// Styles
import './Home.scss'

// Component
import { Card } from '../../shared/component/Card';

function Home() {

    return (
        <div className='viewport items-center lg:p-8'>
            <div className='safezone w-full h-full lg:max-w-screen-xl'>
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