import { useState } from 'react';
import './App.css';
import CompA from './CompA';
import GlobalContextProvider from './GlobalContext';

// const name="John"
const info = "some info"
function App() {
  return (
    <GlobalContextProvider>
    <div className="App">
      <CompA info={info}/>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
