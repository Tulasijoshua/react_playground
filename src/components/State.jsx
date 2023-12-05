import React, { useState } from 'react'

const State = () => {
    const [count, setCount] = useState(0);
    const [isEven, setIsEven] = useState(false)

  return (
    <div>
        <h1>Count: {count}</h1>
        <h2>{isEven ? 'Even' : 'Old'}</h2>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
        <button onClick={() => setIsEven(!isEven)}>Toggle Even/Odd</button>
    </div>
  )
}

export default State