import React,{createContext} from 'react';
export const UserContext = createContext();

const UserContextProvider = (props) => {
    const user = {
        name:"Sahil",
        role:"Student"
    }
    return (
        <div>
            <UserContext.Provider value={user}>
                {props.children}
            </UserContext.Provider>
        </div>
    );
};

export default UserContextProvider;