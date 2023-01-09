import { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(10)

  const handleClick = () => {
    setNum1(num1 + 1)
    setNum2(num2 - 1 )
    if (num1 === num2) {
    }
  }

  return (
    <div>
      num 1: {num1}
      <br/>
      num 2: {num2}
      <br/>
      {num1!==num2 && <button onClick={handleClick}>Click me</button>}
    </div>
  )
}


export default App;
