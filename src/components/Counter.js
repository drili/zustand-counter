import react from "react"
import { useStore } from "../store/store"

const Counter = () => {
    const { count, increment, decrement } = useStore()

    return (
        <div>
            <h1>Counter {count}</h1>

            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter