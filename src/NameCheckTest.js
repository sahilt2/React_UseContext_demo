import React, { useState } from 'react';

const NameCheckTest = (props) => {
    const {name}=props;
    const [changedName,setChangedName] = useState(name)
    return (
        <div style={{backgroundColor:'lightblue'}}>
            <h1>NameCheckTest</h1>
            <input type='text' value={changedName} onChange={(e)=>setChangedName(e.target.value)} placeholder='Enter Your Name'/>
            <p>Hello name:{changedName}</p>
        </div>
    );
};

export default NameCheckTest;