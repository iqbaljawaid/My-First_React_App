import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from "./Calculator";
import CalculatorFunc from './CalculatorFuncComponent';

function App() {
  return (
    <div className="App">
      <Calculator/>
      <hr/>
      <br/>
      <CalculatorFunc/>
    </div>
  );
}

export default App;
