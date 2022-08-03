import React from 'react';

const Header = ({darkMode,setDarkMode}) => {


    const handleClick = () => {
        setDarkMode(!darkMode);
    }

    return (
        <div>
            <h1>React Hooks</h1>
            <button type='button'
            onClick={handleClick}
            >{
                darkMode
                    ? 'Dark Mode'
                    : 'Light Mode'
            }</button>
        </div>
    );
}

export {Header};