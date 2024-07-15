import React, { useState } from 'react';

function App() {
  const [numbers, setNums] = useState([]);
  const [average, setAvg] = useState(0);

  const addNum= (newNumber) => {
    setNum([...numbers, newNumber]);
    if (numbers.length > 9) {
      setNumbers(numbers.slice(1));
    }
  };

  const calAverage = () => {
    const sum = numbers.reduce((a, b) => a + b, 0);
    setAvg(sum / numbers.length);
  };

  return (
    <div>
      <h1>Average Calculator </h1>
      <button onClick={() => addNum(10)}>Add 10</button>
      <button onClick={() => addNum(20)}>Add 20</button>
      <button onClick={() => addNum(30)}>Add 30</button>
      <button onClick={calculateAverage}>calculate average</button>
      <p>numbers: {numbers.join(', ')}</p>
      <p>average: {average}</p>
    </div>
  );
}

export default App;