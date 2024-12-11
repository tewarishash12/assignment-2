import React, { createContext, useContext, useState } from 'react'

export const DarkThemeProvider = createContext();

export function useDarkMode(){
    return useContext(DarkThemeProvider);
}

export function DarkMode({children}) {
    const [darkMode, setDarkMode] = useState(()=>{
        const currentTheme = localStorage.getItem('darkMode');
        return currentTheme ? JSON.parse(currentTheme) : false; 
    });

    return (
        <DarkThemeProvider.Provider value={{darkMode, setDarkMode}}>
            {children}
        </DarkThemeProvider.Provider>
    )
}
