import React from 'react';
import CompC from './CompC';
import UserContextProvider from './UserContext';

const CompB = ({info}) => {
    return (
        <>
        <div style={{backgroundColor:'red'}}>
            CompB will be here
        </div>
        <div>{info}</div>
        <UserContextProvider>
        <CompC info={info}/>
        </UserContextProvider>
        
        </>
    );
};

export default CompB;