import React, {useState, useEffect, useRef} from 'react'

function App() {

  const [timer, setTimer] = useState(0)
  let interval;
  const increment = useRef();
  
  useEffect(() => {
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 10000)
    return () => clearInterval(increment.current)
  }, [])

  const handleReset = () => {
    clearInterval(increment.current);
  }

  return (
    <div className="App">
      <p>Timer: {timer}</p>
      {/* <button onClick={handleStart}>Start</button> */}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App
