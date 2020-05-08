import React from 'react';

// Styles
import './Shell.scss';

function Shell() {
    return (
        <div className="flex flex-col h-full w-full lg:flex-row">
            <div className="appbar hidden p-8 lg:flex">
                shell
            </div>
            <div>
                Shell
            </div>
        </div>
    )
}

export default Shell;