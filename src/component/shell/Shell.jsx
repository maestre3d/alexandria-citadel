import React from 'react';
import { APPLICATION_SHORT_NAME, PLATFORM_NAME } from '../../core/config';

// Component
import { Button, ButtonIcon } from '../../shared/component/Button';

// Styles
import './Shell.scss';
import { changeTheme } from '../../shared/service/theme';
import { CardSmall } from '../../shared/component/Card';


function Shell() {
    const customBorderRadius = "24px";
    document.title = `${APPLICATION_SHORT_NAME} - Home`;

    const action = () => changeTheme();

    return (
        <div className="flex flex-col h-full w-full lg:flex-row">

            {/** Desktop Appbar */}
            <div className="appbar desktop hidden flex-col items-center p-10 shadow-2xl lg:flex" style={{borderTopRightRadius:customBorderRadius, borderBottomRightRadius:customBorderRadius}}>
                
                <div className="flex flex-col">
                    <h1 className='font-bold text-3xl'>{PLATFORM_NAME}</h1>
                    <h2 className='text-3xl'>{APPLICATION_SHORT_NAME}</h2>
                </div>

                {/** Appbar list */}
                <div className="list-y flex flex-col my-4 w-full">
                    
                    {/** Event Bus */}
                    <div className='item flex flex-col'>
                        <strong className="uppercase text-sm tracking-wider mb-2">Event Bus</strong>
                        <Button>
                            <span className="mdi mdi-apache-kafka text-xl mr-1" />
                            <span>Kafka</span>
                        </Button>
                        <Button>
                            <span className="mdi mdi-rabbit text-xl mr-1" />
                            <span>RabbitMQ</span>
                        </Button>
                        <Button>
                            <span className="mdi mdi-aws text-xl mr-1" />
                            <span>Amazon</span>
                        </Button>
                    </div>

                    {/** HTTP API */}
                    <div className='item flex flex-col'>
                        <strong className="uppercase text-sm tracking-wider mb-2">HTTP API</strong>
                        <Button>
                            <span className="mdi mdi-api text-xl mr-1" />
                            <span>API Status</span>
                        </Button>
                        <Button>
                            <span className="mdi mdi-gauge text-xl mr-1" />
                            <span>Metric</span>
                        </Button>
                    </div>

                    {/** RPC API */}
                    <div className='item flex flex-col'>
                        <strong className="uppercase text-sm tracking-wider mb-2">RPC API</strong>
                        <Button>
                            <span className="mdi mdi-api text-xl mr-1" />
                            <span>API Status</span>
                        </Button>
                        <Button>
                            <span className="mdi mdi-gauge text-xl mr-1" />
                            <span>Metric</span>
                        </Button>
                    </div>

                    {/** System */}
                    <div className='item flex self-center'>
                        <ButtonIcon action={action}>
                            <span className="icon">account_circle</span>
                        </ButtonIcon>
                    </div>

                </div>
            </div>

            {/** Content */}
            <div className="flex flex-col h-auto w-full items-center p-4">
                <div className='flex flex-col self-start lg:hidden'>
                    <h1 className='font-bold text-3xl'>{PLATFORM_NAME}</h1>
                    <h2 className='text-3xl'>{APPLICATION_SHORT_NAME}</h2>
                </div>
                <CardSmall image='https://images.unsplash.com/photo-1501526029524-a8ea952b15be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
                    alt='statistics'>
                    <span>Statistics</span>
                </CardSmall>
                <CardSmall image='https://images.unsplash.com/photo-1501526029524-a8ea952b15be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
                    alt='statistics'>
                    <span>Statistics</span>
                </CardSmall>
            </div>

            {/** Mobile Appbar */}
            <div className="appbar mobile flex flex-row justify-center items-center p-1 my-8 rounded-full z-10 fixed bottom-0 self-center max-w-screen-sm
                shadow-2xl  lg:hidden">
                <ButtonIcon action={action}>
                    <span className="icon">home</span>
                </ButtonIcon>
                <ButtonIcon>
                    <span className="mdi mdi-server-network" />
                </ButtonIcon>
                <ButtonIcon>
                    <span className="mdi mdi-api" />
                </ButtonIcon>
                <ButtonIcon action={action}>
                    <span className="icon">account_circle</span>
                </ButtonIcon>
            </div>
        </div>
    )
}

export default Shell;