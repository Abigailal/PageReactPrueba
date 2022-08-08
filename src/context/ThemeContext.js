import React from 'react';

const ThemeContext = React.createContext({});

export function ThemeContextProvider({children}){
    const [theme, setTheme] = React.useState(false);
    
    return (
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export {ThemeContext};
