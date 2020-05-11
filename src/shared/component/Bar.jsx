import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

// Component dependecies
import { Button } from './Button';
import { FieldText } from './Field';

/**
 * SearchBar exports a search/query bar component.
 * _*Requires Hooks to operate_
 * @param {string} props.type Type, options: 'mobile'/'m' or empty
 * @param {boolean} props.isHidden Parent's hook state value DOM visibility _*Only for mobile_
 * @param {function} props.onHiddenHandler Parent's hook isHidden state's value handler
 * @param {string} props.className Extra CSS classes
 */
export function SearchBar(props) {
    const [query, setQuery] = useState('')
    const closeBarHandler = () => {
        // Add closing anim, then trigger DOM element destruction
        document.getElementById('#searchbar').classList.add('animate__animated', 'animate__fadeOutUp', 'animate__faster')
        window.setTimeout(function() {
            document.documentElement.classList.remove('animate__animated', 'animate__fadeOutUp', 'animate__faster')
            props.onHiddenHandler()
        }, 200)
    }

    // Change query state
    const onQueryHandler = (e) => {
        setQuery(e.target.value)
    };

    useEffect(() => {
        // Call query API
    })

    switch(props.type) {
        case 'mobile' || 'm':
            if (!props.isHidden) {
                return <div id='#searchbar' className='appbar mobile flex flex-row justify-center items-center py-2 px-4 my-4 rounded-full z-10 
                    fixed top-0 self-center max-w-screen-sm shadow-xl 
                    animate__animated animate__fadeInDown animate__faster lg:hidden'>

                    <Button type='icon' action={closeBarHandler} className='h-10 w-10 text-lg'>
                        <span className="icon">arrow_back</span>
                    </Button>
                    <FieldText className='ml-1 my-1 w-56 self-center' icon='search' placeholder='Search a category' 
                        onChangeHandler={onQueryHandler} value={query} />
                </div>
            }
            return null
        default:
            return <FieldText className='my-1 w-full max-w-full' icon='search' placeholder='Search a category' 
                        onChangeHandler={onQueryHandler} value={query} />
    }
}

SearchBar.propTypes = {
    type: PropTypes.string,
    isHidden: PropTypes.bool,
    onHiddenHandler: PropTypes.func,
    className: PropTypes.string
}