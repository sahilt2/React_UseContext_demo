import React,{createContext}from 'react';
export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
    return (
        <div>
            <GlobalContext.Provider value={"Test ABC"}>
                {props.children}
            </GlobalContext.Provider>
        </div>
    );
};

export default GlobalContextProvider;