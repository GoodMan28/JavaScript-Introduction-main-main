// Here we will learn about the notification bar
import { useEffect, useState } from "react";
export default function App() {
    let [count, setCount] = useState(0);

    useEffect(() => {
        setInterval(function () {
            setCount(count => count + 1)
        } ,1000)
    }, [])
    return (
        <div>
            <div style={{height: 20, width: 20, borderRadius: 20, backgroundColor: "red", textAlign: "center"}}>{count}</div>
            <img src="https://th.bing.com/th/id/OIP.r5gQKjxiZEnnVnErniZOVQHaHa?w=196&h=196&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" style={{height: 30, width: 30, cursor: "pointer"}}/>
        </div>
    );
}