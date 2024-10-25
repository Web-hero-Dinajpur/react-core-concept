import { useState } from "react"

export default function Counter (){
    const [count, setCount] = useState(0)

    const handleAdded=()=>{
        const newCounter = count+1;
        setCount(newCounter);
    }
    const handleDown =()=>{
        const newCounter = count - 1;
        setCount(newCounter);
    }
    return(
        <div>
        <h4>counter: {count}</h4>
        <button onClick={handleAdded}>counter add</button>
        <button onClick={handleDown}>counter down</button>
        </div>
        
    )
}