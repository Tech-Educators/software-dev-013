'use client'

import {createContext} from "react"

export const UserContext = createContext('Sam')

// 1) use createContext to create a 'context' 

// 2) create a component that provides the context to it's children

export function UserProvider({children}) {
    // it's possible to have the value change - through useState and events ect - so we pass the value 'again' after calling create context above on the provider itself.
    return (
        <UserContext.Provider value={'Sam'}>
            {children}
        </UserContext.Provider>
    )
}


// 3) go to my layout and wrap the UserProvider around the rest of the application.