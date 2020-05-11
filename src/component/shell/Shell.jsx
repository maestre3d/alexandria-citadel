import React, { useState, useEffect } from 'react';
import { APPLICATION_SHORT_NAME, PLATFORM_NAME, APPLICATION_VERSION } from '../../core/config';

// Component
import { ButtonIcon } from '../../shared/component/Button';
import { Field } from '../../shared/component/Field';
import { ListItem } from '../../shared/component/List';

// Styles
import './Shell.scss';

// Function
import { changeTheme } from '../../shared/service/theme';
import Home from '../home/Home';
import { SearchBar } from '../../shared/component/Bar';

function Shell() {
    const customBorderRadius = '24px';
    document.title = `${APPLICATION_SHORT_NAME} - Home`;

    // Search
    const [searchValue, setSearch] = useState('');

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    // Mobile search bar
    const [triggerSearch, setTriggerSearch] = useState(true)

    useEffect(() => {
        // ComponentDidMount-like - OnSearch change, do API call
        
    })
    

    return (
        <div className="flex flex-col h-full w-full lg:flex-row">

            {/** Desktop Appbar */}
            <div className="appbar desktop hidden flex flex-col items-center p-8 shadow-2xl h-full w-auto
                overflow-y-auto lg:flex" style={{borderTopRightRadius:customBorderRadius, borderBottomRightRadius:customBorderRadius, maxWidth:'300px'}}>
                
                {/** Application name */}
                <div className="flex flex-col my-4">
                    <span className='mdi mdi-chess-rook text-3xl self-center' />
                    <h1 className='font-bold text-3xl'>{PLATFORM_NAME}</h1>
                    <h2 className='text-3xl'>{APPLICATION_SHORT_NAME}</h2>
                </div>

                {/** Search input */}
                <Field className='my-1 w-full max-w-full' icon='search' placeholder='Search a category' handleChange={handleSearchChange} value={searchValue} />

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
                        <ListItem className='mb-1'>
                            <span className="mdi mdi-gauge text-xl mr-1" />
                            <span>Metric</span>
                        </ListItem>
                    </div>

                    <span className='flex-grow' />

                    {/** System Footer */}
                    <div className='flex flex-col my-3 self-center'>
                        <div className='self-center'>
                            <ButtonIcon action={() => changeTheme()}>
                                <span className="icon">account_circle</span>
                            </ButtonIcon>
                        </div>
                        <div className='break-words mt-4 text-center'>
                            <span className='text-sm font-medium'>{PLATFORM_NAME} &copy; 2020 · {APPLICATION_SHORT_NAME} Version {APPLICATION_VERSION}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/** Mobile Searchbar */}
            <SearchBar action={() => setTriggerSearch(triggerSearch ? false : true)} isHidden={triggerSearch} />

            {/** Content - Main Viewport */}
            <Home /> 

            {/** Mobile Appbar */}
            <div className="appbar mobile flex flex-row justify-center items-center p-1 my-8 rounded-full z-10 fixed bottom-0 self-center max-w-screen-sm
                shadow-2xl  lg:hidden">
                <ButtonIcon action={() => changeTheme()}>
                    <span className="icon">dashboard</span>
                </ButtonIcon>
                <ButtonIcon action={() => setTriggerSearch(triggerSearch ? false : true)}>
                    <span className="icon">search</span>
                </ButtonIcon>
                <ButtonIcon>
                    <span className="mdi mdi-server-network" />
                </ButtonIcon>
                <ButtonIcon>
                    <span className="mdi mdi-api" />
                </ButtonIcon>
                <ButtonIcon action={() => changeTheme()}>
                    <span className="icon">account_circle</span>
                </ButtonIcon>
            </div>
        </div>
    )
}

export default Shell;