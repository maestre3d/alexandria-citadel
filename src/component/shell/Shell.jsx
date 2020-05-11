import React, { useState, useEffect } from 'react';
import { APPLICATION_SHORT_NAME } from '../../core/config';

// Styles
import './Shell.scss';

// Component
import Home from '../home/Home';
import { SearchBar, AppBarDesktop, AppBarMobile } from '../../shared/component/Bar';

function Shell() {
    document.title = `${APPLICATION_SHORT_NAME} - Home`

    // Search bar hook
    const [toggleSearch, setToggleSearch] = useState(true)

    // Mobile listener hook
    const [isMobile, setIsMobile] = useState(window.innerWidth >= 1024 ? false : true)

    useEffect(() => {
        // ComponentDidMount-like
        function handleResize() {
            setIsMobile(window.innerWidth >= 1024 ? false : true)
        } 
      
        window.addEventListener('resize', handleResize)

        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    })
    

    return (
        // Shell's Root wrapper
        <div className="flex flex-col h-full w-full lg:flex-row">
            {/** Desktop Appbar */}
            <AppBarDesktop isMobile={isMobile} />

            {/** Mobile Searchbar */}
            <SearchBar type='mobile' onHiddenHandler={() => setToggleSearch(toggleSearch ? false : true)} isHidden={toggleSearch} />

            {/** Content - Main Viewport */}
            <Home /> 

            {/** Mobile Appbar */}
            <AppBarMobile isMobile={isMobile} toggleSearchHandler={() => setToggleSearch(toggleSearch ? false : true)} />
        </div>
    )
}

export default Shell;