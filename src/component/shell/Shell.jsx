import React from 'react';
import { APPLICATION_SHORT_NAME, PLATFORM_NAME } from '../../core/config';

// Component
import { ButtonIcon } from '../../shared/component/Button';
import { CardSmall } from '../../shared/component/Card';
import { Field } from '../../shared/component/Field';
import { ListItem } from '../../shared/component/List';

// Styles
import './Shell.scss';

// Function
import { changeTheme } from '../../shared/service/theme';

function Shell() {
    const customBorderRadius = "24px";
    document.title = `${APPLICATION_SHORT_NAME} - Home`;

    const action = () => changeTheme();

    return (
        <div className="flex flex-col h-full w-full lg:flex-row">

            {/** Desktop Appbar */}
            <div className="appbar hidden flex flex-col items-center p-8 shadow-2xl h-full w-auto max-w-md
                lg:flex" style={{borderTopRightRadius:customBorderRadius, borderBottomRightRadius:customBorderRadius}}>
                
                {/** Application name */}
                <div className="flex flex-col my-4">
                    <span className='mdi mdi-chess-rook text-3xl self-center' />
                    <h1 className='font-bold text-3xl'>{PLATFORM_NAME}</h1>
                    <h2 className='text-3xl'>{APPLICATION_SHORT_NAME}</h2>
                </div>

                {/** Search input */}
                <div className='my-1 w-full'>
                    <Field icon='search' placeholder='Search a category' />
                </div>

                {/** Appbar list */}
                <div className="flex flex-col my-4 w-full h-full">
                    
                    {/** Event Bus */}
                    <div className='flex flex-col my-3'>
                        <strong className="uppercase text-sm tracking-wider mb-2">Event Bus</strong>
                        <ListItem>
                            <span className="mdi mdi-apache-kafka text-xl mr-2" />
                            <span>Kafka</span>
                        </ListItem>
                    </div>

                    {/** HTTP API */}
                    <div className='flex flex-col my-3'>
                        <strong className="uppercase text-sm tracking-wider mb-2">HTTP API</strong>
                        <ListItem>
                            <span className="mdi mdi-api text-xl mr-1" />
                            <span>API Status</span>
                        </ListItem>
                        <ListItem>
                            <span className="mdi mdi-gauge text-xl mr-1" />
                            <span>Metric</span>
                        </ListItem>
                    </div>

                    {/** RPC API */}
                    <div className='flex flex-col my-3'>
                        <strong className="uppercase text-sm tracking-wider mb-2">RPC API</strong>
                        <ListItem>
                            <span className="mdi mdi-api text-xl mr-1" />
                            <span>API Status</span>
                        </ListItem>
                        <ListItem>
                            <span className="mdi mdi-gauge text-xl mr-1" />
                            <span>Metric</span>
                        </ListItem>
                    </div>

                    <span className='flex-grow' />

                    {/** System */}
                    <div className='flex my-3 self-center'>
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
                <div className='card card-sm card-ios'>
                    <img src='https://images.unsplash.com/photo-1501526029524-a8ea952b15be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
                                    alt='' className='rounded-full w-24 h-24 shadow-lg' />
                            <span>Maths</span>
                </div>
            </div>

            {/** Mobile Appbar */}
            <div className="appbar mobile flex flex-row justify-center items-center p-1 my-8 rounded-full z-10 fixed bottom-0 self-center max-w-screen-sm
                shadow-2xl  lg:hidden">
                <ButtonIcon action={action}>
                    <span className="icon">dashboard</span>
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