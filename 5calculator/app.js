// app.js
const { useState } = React;

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [currentNumber, setCurrentNumber] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const handleDigitClick = (digit) => {
    if (display === '0' || waitingForOperand) {
      setDisplay(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplay(display + digit);
    }
  };

  const handleOperatorClick = (nextOperator) => {
    const inputValue = parseFloat(display);

    if (currentNumber == null) {
      setCurrentNumber(inputValue);
    } else if (operator) {
      const result = applyOperator(operator, currentNumber, inputValue);
      setCurrentNumber(result);
      setDisplay(String(result));
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
  };

  const applyOperator = (operator, leftOperand, rightOperand) => {
    switch (operator) {
      case '+':
        return leftOperand + rightOperand;
      case '-':
        return leftOperand - rightOperand;
      case '*':
        return leftOperand * rightOperand;
      case '/':
        return leftOperand / rightOperand;
      default:
        return rightOperand;
    }
  };

  const handleEqualsClick = () => {
    const inputValue = parseFloat(display);

    if (currentNumber != null && operator != null) {
      const result = applyOperator(operator, currentNumber, inputValue);
      setCurrentNumber(null);
      setOperator(null);
      setDisplay(String(result));
      setWaitingForOperand(true);
    }
  };

  const handleClearClick = () => {
    setDisplay('0');
    setCurrentNumber(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button className="button" onClick={() => handleDigitClick(7)}>7</button>
        <button className="button" onClick={() => handleDigitClick(8)}>8</button>
        <button className="button" onClick={() => handleDigitClick(9)}>9</button>
        <button className="button" onClick={() => handleOperatorClick('/')}>/</button>
        <button className="button" onClick={() => handleDigitClick(4)}>4</button>
        <button className="button" onClick={() => handleDigitClick(5)}>5</button>
        <button className="button" onClick={() => handleDigitClick(6)}>6</button>
        <button className="button" onClick={() => handleOperatorClick('*')}>*</button>
        <button className="button" onClick={() => handleDigitClick(1)}>1</button>
        <button className="button" onClick={() => handleDigitClick(2)}>2</button>
        <button className="button" onClick={() => handleDigitClick(3)}>3</button>
        <button className="button" onClick={() => handleOperatorClick('-')}>-</button>
        <button className="button" onClick={() => handleDigitClick(0)}>0</button>
        <button className="button" onClick={() => handleOperatorClick('.')}>.</button>
        <button className="button" onClick={handleEqualsClick}>=</button>
        <button className="button" onClick={() => handleOperatorClick('+')}>+</button>
        <button className="button clear" onClick={handleClearClick}>C</button>
      </div>
    </div>
  );
};

ReactDOM.render(<Calculator />, document.getElementById('root'));
