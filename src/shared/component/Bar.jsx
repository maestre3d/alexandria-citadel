import React, {useState, useEffect} from 'react';
import { ButtonIcon } from './Button';
import { Field } from './Field';

export function SearchBar(props) {
    const [searchValue, setSearch] = useState('')

    useEffect(() => {
        // Call query API
    })

    if (!props.isHidden) {
        const handleSearchChange = (e) => {
            setSearch(e.target.value)
        };

        

        return <div className="appbar mobile flex flex-row justify-center items-center py-2 px-4 my-4 rounded-full z-10 fixed top-0 self-center max-w-screen-sm
        shadow-xl  lg:hidden">
            <ButtonIcon action={props.action}>
                <span className="icon">arrow_back</span>
            </ButtonIcon>
            <Field className='my-1 w-56 self-center' icon='search' placeholder='Search a category' handleChange={handleSearchChange} value={searchValue} />
        </div>
    }

    return null
}