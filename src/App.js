import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import FetchData from './components/fetchData';

function App() {
  return (
    <>
      <main>
        <Calculator />
        <FetchData />
      </main>
    </>
  );
}

export default App;
