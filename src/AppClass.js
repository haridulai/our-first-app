import React, { useState } from 'react'

function App()  {
    const [count, setCount ] = useState(0);
   
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div className="App">
            <h1 className="app__title">Welcome to my counter app</h1>
            <p>the count is {count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default App;