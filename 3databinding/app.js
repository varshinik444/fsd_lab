const { useState } = React;

function App() {
  // State for two-way data binding
  const [inputValue, setInputValue] = useState('');

  // State for one-way data binding
  const [displayValue, setDisplayValue] = useState('Initial text');

  // Handle change in input for two-way data binding
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handle button click to update the one-way data binding state
  const updateDisplayValue = () => {
    setDisplayValue(inputValue);
  };

  return (
    <div className="container">
      <h1>React Data Binding Example</h1>
      
      {/* Two-way data binding */}
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
        placeholder="Type something..."
      />
      <p>Two-way bound value: {inputValue}</p>

      {/* One-way data binding */}
      <button onClick={updateDisplayValue}>Update Display Value</button>
      <p>One-way bound value: {displayValue}</p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
