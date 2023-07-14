import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import IState from "./types";

class Calculator extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      first: '',
      second: '',
      result: 0,
    };
  }

  performOperation(operation: string): void {
    const { first, second } = this.state;
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

    this.setState({ result });
  }
  clear(){
    this.setState({first:'',second:''})
  }

  render(): React.ReactNode {
    const { first, second, result } = this.state;

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
    //           onChange={(event) => this.setState({ first: event.target.value })}
    //         />
    //       </li>
    //       <li>
    //         <input
    //           type="text"
    //           name="second"
    //           value={second}
    //           onChange={(event) => this.setState({ second: event.target.value })}
    //         />
    //       </li>
    //       <li>
    //         <button onClick={() => this.performOperation('add')}>Add</button>
    //         <button onClick={() => this.performOperation('subtract')}>Subtract</button>
    //         <button onClick={() => this.performOperation('multiply')}>Multiply</button>
    //         <button onClick={() => this.performOperation('divide')}>Divide</button>
    //         <button onClick={()=> this.clear()}>clear</button>
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
              onChange={(event) => this.setState({ first: event.target.value })}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="second"
              value={second}
              onChange={(event) => this.setState({ second: event.target.value })}
            />
          </div>
          <div>
            <button
              type="button"
              className="btn btn-primary me-2"
              onClick={() => this.performOperation('add')}
            >
              Add
            </button>
            <button
              type="button"
              className="btn btn-primary me-2"
              onClick={() => this.performOperation('subtract')}
            >
              Subtract
            </button>
            <button
              type="button"
              className="btn btn-primary me-2"
              onClick={() => this.performOperation('multiply')}
            >
              Multiply
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => this.performOperation('divide')}
            >
              Divide
            </button>
            <button  
              type="button"
              className="btn btn-warning"
              onClick={()=> this.clear()}>clear
              </button>
          </div>
        </form>
      </div>
    );  
  }
}

export default Calculator;
