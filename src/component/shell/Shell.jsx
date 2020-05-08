import React from 'react';
import { APPLICATION_SHORT_NAME } from '../../core/config';

// Styles
import './Shell.scss';

function Shell() {
    const customBorderRadius = "24px";
    document.title = `${APPLICATION_SHORT_NAME} - Home`;

    return (
        <div className="flex flex-col h-full w-full lg:flex-row">
            <div className="appbar hidden p-16 shadow-2xl lg:flex" style={{borderTopRightRadius:customBorderRadius, borderBottomRightRadius:customBorderRadius}}>
                <b>Citadel</b>
            </div>
            <div className="appbar flex flex-row justify-center items-center p-4 m-4 rounded-lg z-10 absolute bottom-0 inset-x-0 lg:hidden">
                Que pedo
            </div>
            <div className="flex flex-col h-full w-full items-center p-4">
                Shell
            </div>
        </div>
    )
}

export default Shell;