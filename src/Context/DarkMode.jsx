import React, { createContext, useContext, useState, useEffect } from 'react'

export const DarkThemeProvider = createContext();

export function useDarkMode() {
    return useContext(DarkThemeProvider);
}

export function DarkMode({ children }) {
    const [darkMode, setDarkMode] = useState(() => {
        const currentTheme = localStorage.getItem('darkMode');
        return currentTheme ? JSON.parse(currentTheme) : false; 
    });
    

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode))
    }, [darkMode])
    


    return (
        <DarkThemeProvider.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </DarkThemeProvider.Provider>
    )
}
