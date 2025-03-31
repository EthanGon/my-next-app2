"use client"

import { useState } from "react"

function HomePage() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => {
                setCount(count + 1);
            }}>Add one</button>
        </div>
    )
}
export default HomePage