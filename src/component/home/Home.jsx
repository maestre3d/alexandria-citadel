import React from 'react'
import { APPLICATION_NAME } from '../../core/config';

// Styles
import './Home.scss'

// Component
import { Banner } from '../../shared/component/Banner';

function Home() {
    return (
        <div className='viewport items-center lg:p-8'>
            <div className='safezone w-full h-full lg:max-w-screen-xl'>
                <Banner heading={'Introducing '+APPLICATION_NAME} description='Telemetry, statistics and many more.' />
            </div>
        </div>
    )
}

export default Home