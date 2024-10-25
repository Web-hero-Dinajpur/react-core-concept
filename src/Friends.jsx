import { useEffect, useState } from "react"
import './Friend.css'
import Friend from "./Friend";

export default function firends(){
     const [friends, setFriend] = useState([]);

     useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(res => setFriend(res))
     },[])
    return(
        <div className="box">
            <h2>Friends :{friends.length} </h2>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}