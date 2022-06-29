import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chate: false,
    cart: false,
    userProfile: false,
    notification: fasle,
}

export const contextProvider = ({ children }) => {

    const [activeMenu, setActiveMenu] = useState(true);

    return (
        <StateContext.Provider value={{ activeMenu,}}>
            {children}
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext);


