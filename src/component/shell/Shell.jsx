import React from 'react';
import { APPLICATION_SHORT_NAME } from '../../core/config';

// Component
import { ButtonIcon } from '../../shared/component/Button';

// Styles
import './Shell.scss';


function Shell() {
    const customBorderRadius = "24px";
    document.title = `${APPLICATION_SHORT_NAME} - Home`;

    return (
        <div className="flex flex-col h-full w-full lg:flex-row">
            <div className="appbar hidden p-16 shadow-2xl lg:flex" style={{borderTopRightRadius:customBorderRadius, borderBottomRightRadius:customBorderRadius}}>
                <span className="font-bold text-3xl">{APPLICATION_SHORT_NAME}</span>
            </div>
            <div className="flex flex-col h-full w-full items-center p-4">
                <span className="font-bold text-3xl lg:hidden">{APPLICATION_SHORT_NAME}</span>
                <div>
                    Authors created: 1
                </div>
            </div>
            <div className="appbar mobile flex flex-row justify-center items-center p-1 mx-4 my-8 rounded-full z-10 absolute bottom-0 inset-x-0
                shadow-2xl lg:hidden">
                <ButtonIcon icon="home" />
                <ButtonIcon icon="account_circle" />
            </div>
        </div>
    )
}

export default Shell;