import React, { useEffect, useState } from 'react'

const EffectTwo = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1)
        }, 1000)

        return () => clearInterval(intervalId);
    }, [])

  return (
    <div>
        <h3>Seconds: { seconds }</h3>
    </div>
  )
}

export default EffectTwo