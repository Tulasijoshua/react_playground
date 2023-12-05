import React, { useState } from 'react'

const State = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  )
}

export default State