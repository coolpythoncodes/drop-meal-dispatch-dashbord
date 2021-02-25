import { useState, createContext } from 'react';

const MenuContext = createContext()

const MenuContextProvider = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return(
        <MenuContext.Provider 
            value={{
                sidebarOpen,
                setSidebarOpen
            }}
        >
            {children}
        </MenuContext.Provider>
    )
}

export { MenuContextProvider, MenuContext }