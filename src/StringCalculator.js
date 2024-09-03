// src/StringCalculator.js
import React, { useState } from 'react';

function StringCalculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const numbers = input.split(',').map(num => parseFloat(num)).filter(num => !isNaN(num));
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    setResult(sum);
  };

  return (
    <div>
      <h1>String Calculator</h1>
      <input
        type="text"
        placeholder="Enter numbers separated by commas"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleCalculate}>Calculate</button>
      {result !== null && <div>Result: {result}</div>}
    </div>
  );
}

export default StringCalculator;
