import { useState } from 'react';
import './App.css';
import * as math from "mathjs";

function App() {
  const [calculation, setCalculation] = useState('');

  const handleButtonClick = (e) => {
    const buttonValue = e.target.value;
    let newCalculation = calculation;

    switch (buttonValue) {
      case 'AC':
        newCalculation = '';
        break;
      case 'DE':
        newCalculation = calculation.slice(0, -1);
        break;
      case '=':
        try {
          newCalculation = math.evaluate(calculation);
        } catch (error) {
          newCalculation = 'Error';
        }
        break;
      case 'x^2':
        newCalculation += '**2';
        break;

      case '1/x':
        newCalculation += '**(-1)';
        break;
      case '10^x':
        newCalculation += '10**';
        break;
      case 'x^n':
        newCalculation += '**';
        break;
      case 'sin':
        newCalculation += 'sin(';
        break;
      case 'PI':
        newCalculation += 'pi';
        break;
      default:
        newCalculation += buttonValue;
    }

    setCalculation(newCalculation);
  };



  return (
    <div className="container">
      <div className="calculator">
        <div className='head'>
          Calculator
        </div>
        <form>
          <div className='display'>
            <input type='text' value={calculation} readOnly />
          </div>
          <div>
            <input type='button' value="AC" className='allClr' onClick={handleButtonClick} />
            <input type='button' value="DE" className='diff' onClick={handleButtonClick} />
            <input type='button' value="." className='diff' onClick={handleButtonClick} />
            <input type='button' value="/" className='diff' onClick={handleButtonClick} />
          </div>
          <div>
            <input type='button' value="sin" onClick={handleButtonClick} />
            <input type='button' value="7" onClick={handleButtonClick} />
            <input type='button' value="8" onClick={handleButtonClick} />
            <input type='button' value="9" onClick={handleButtonClick} />
            <input type='button' value="*" className='diff' onClick={handleButtonClick} />
          </div>
          <div>
            <input type='button' value="PI" onClick={handleButtonClick} />
            <input type='button' value="4" onClick={handleButtonClick} />
            <input type='button' value="5" onClick={handleButtonClick} />
            <input type='button' value="6" onClick={handleButtonClick} />
            <input type='button' value="+" className='diff' onClick={handleButtonClick} />
          </div>
          <div>
            <input type='button' value="1/x" onClick={handleButtonClick} />
            <input type='button' value="1" onClick={handleButtonClick} />
            <input type='button' value="2" onClick={handleButtonClick} />
            <input type='button' value="3" onClick={handleButtonClick} />
            <input type='button' value="-" className='diff' onClick={handleButtonClick} />
          </div>
          <div>
            <input type='button' value="x^n" onClick={handleButtonClick} />
            <input type='button' value="00" onClick={handleButtonClick} />
            <input type='button' value="0" onClick={handleButtonClick} />
            <input type='button' value=")" onClick={handleButtonClick} />
            <input type='button' value="=" className='equal' onClick={handleButtonClick} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
