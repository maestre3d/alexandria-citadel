import React, {useState, useEffect} from 'react';
import { ButtonIcon } from './Button';
import { Field } from './Field';

export function SearchBar(props) {
    const [searchValue, setSearch] = useState('')
    const closeBar = () => {
        document.getElementById('#searchbar').classList.add('animate__animated', 'animate__fadeOutUp', 'animate__faster')
        window.setTimeout(function() {
            document.documentElement.classList.remove('animate__animated', 'animate__fadeOutUp', 'animate__faster')
            props.action()
        }, 200)
    }

    useEffect(() => {
        // Call query API
    })

    if (!props.isHidden) {
        const handleSearchChange = (e) => {
            setSearch(e.target.value)
        };

        return <div id='#searchbar' className="appbar mobile flex flex-row justify-center items-center py-2 px-4 my-4 rounded-full z-10 fixed top-0 self-center max-w-screen-sm
        shadow-xl animate__animated animate__fadeInDown animate__faster lg:hidden">
            <ButtonIcon action={closeBar} className='h-10 w-10 text-lg'>
                <span className="icon">arrow_back</span>
            </ButtonIcon>
            <Field className='ml-1 my-1 w-56 self-center' icon='search' placeholder='Search a category' handleChange={handleSearchChange} value={searchValue} />
        </div>
    }

    return null
}