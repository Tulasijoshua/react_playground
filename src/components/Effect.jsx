import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('https://api.example.com/data')
            .then((response) => response.json())
            .then((result) => setData(result))
            .catch((error) => console.error('Error fetching data:', error));
    }, [])
  return (
    <div>
        {data ? (
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        ) : (
            <p>Loading data...</p>
        )}
    </div>
  )
}

export default Effect