import { useState } from "react"

export default function player(){
    const [player , setPlayer] = useState(0);

    const handleAdded=()=>{
        setPlayer(player + 1)
    }
    const handleRemove=()=>{
        setPlayer(player - 1)
    }
    return(
        <div>
            <h2>player: {player}</h2>
            <button onClick={handleAdded}>add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}