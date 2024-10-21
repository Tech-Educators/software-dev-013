'use client'

import {createContext, useState, useEffect, useContext} from "react"

export type ThemeProps = {
    theme: string,
    toggleTheme: () => void
}
// setting up the intial context. create context takes a param of the default value for that context. 
const ThemeContext = createContext<ThemeProps | undefined>(undefined)

export function ThemeProvider({children}: {
    children: React.ReactNode;
  }) {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    }, [theme]);

    const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    // on the value prop for the provider pass whatever values you want to rest of the application to be able to read (data/functions are fine.)
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}



// 1) use createContext to setup a context - themeContext.
// 2) create a component that does any of your business logic for the context - and returns themeContext.Provider
// 3) useContext is a function that comes with react that allows us to read from the provider - use this in any components that want to read from the provider. 

// Lets create a custom hook.
export const useTheme = () => {
    // useContext  (from react) we call inside our components to read the current context - 
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used in a component that is a child of the ThemeContextProvider comp.')
    }
    return context

    // { theme: 'light', toggleTheme: [Function: toggleTheme] } - THIS IS WHAT CONTEXT IS
}

// go over to my layout and wrap my appilication in the themeprovider.