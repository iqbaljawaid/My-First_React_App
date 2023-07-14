import React, { useState } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import IState from "./types";

function Calculator(props:any) {

  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [result, setResult] = useState(0);

  const performOperation=(operation: string) =>{

    let result = 0;

    switch (operation) {
      case 'add':
        result = parseInt(first) + parseInt(second);
        break;
      case 'subtract':
        result = parseInt(first) - parseInt(second);
        break;
      case 'multiply':
        result = parseInt(first) * parseInt(second);
        break;
      case 'divide':
        result = parseInt(first) / parseInt(second);
        break;
      default:
        break;
    }

   setResult(result);
  }
 const clear=()=>{
    setFirst('');
    setSecond('');
  }

 

    // return (
    //   <>
    //     <h1>Calculator</h1>
    //     <h1>Result: {result}</h1>

    //     <ul>
    //       <li>
    //         <input
    //           type="text"
    //           name="first"
    //           value={first}
    //           onChange={(event) => setFirst(event.target.value )}
    //         />
    //       </li>
    //       <li>
    //         <input
    //           type="text"
    //           name="second"
    //           value={second}
    //           onChange={(event) => setSecond(event.target.value )}
    //         />
    //       </li>
    //       <li>
    //         <button onClick={() => performOperation('add')}>Add</button>
    //         <button onClick={() => performOperation('subtract')}>Subtract</button>
    //         <button onClick={() => performOperation('multiply')}>Multiply</button>
    //         <button onClick={() => performOperation('divide')}>Divide</button>
    //         <button onClick={()=> clear()}>clear</button>
    //       </li>
    //     </ul>
    //   </>
    // );/

    return (
      <div className="container">
        <h1 className="text-center mt-4">Calculator</h1>
        <h1>Result: {result}</h1>
  
        <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="first"
              value={first}
              onChange={(event) => setFirst(event.target.value )}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="second"
              value={second}
              onChange={(event) => setSecond(event.target.value )}
            />
          </div>
          <div>
            <button
              type="button"
              className="btn btn-primary me-2"
              onClick={() => performOperation('add')}
            >
              Add
            </button>
            <button
              type="button"
              className="btn btn-primary me-2"
              onClick={() => performOperation('subtract')}
            >
              Subtract
            </button>
            <button
              type="button"
              className="btn btn-primary me-2"
              onClick={() => performOperation('multiply')}
            >
              Multiply
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => performOperation('divide')}
            >
              Divide
            </button>
            <button  
              type="button"
              className="btn btn-warning"
              onClick={()=>clear()}>clear
              </button>
          </div>
        </form>
      </div>
    );  
  };
export default Calculator;
