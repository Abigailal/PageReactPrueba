import React from 'react';

const Header = ({theme,setTheme}) => {
    

    const handleClick = () => {
        setTheme(!theme)
    }

    let gbtn = theme ? "btn btn-light" : "btn btn-dark";

    return (
        <div className='ms-auto'>
            <button type='button'
            onClick={handleClick}
            className={'btn me-5 mt-3 ms-auto' + gbtn}
            >{
                theme
                    ? 'Go to Light Mode'
                    : 'Go to Dark Mode'
            }</button>
        </div>
    );
}

export {Header};