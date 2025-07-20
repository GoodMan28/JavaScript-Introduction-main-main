// Here we will make a top bar.
// Whenever we click the todo button the particular todo will appear

import { useEffect, useState } from "react";

export default function App() {
    let [todo, setTodo] = useState(1); // this is our current tab and this will be red
    let [todoData, setTodoData] = useState();
    let [loading, setLoading] = useState(true)
    // whenever the current todo changes the api request needs to be sent, hence we put the "todo" state in our dependency array
    useEffect(() => {
        async function getTodo() {
            // send backend request when the current tab is called
            setLoading(true);
            let response = await fetch("https://jsonplaceholder.typicode.com/todos/" + todo) // we get the response object 
            let data = await response.json();
            setLoading(false); // because the loading has completed and we have fetched the data from the backend. This happened in sequence because the await was there
            console.log("todo is set to " + todo);
            setTodoData(data.title)
        }
         
        getTodo(); // because this will take some time since this is an async function
        
    }, [todo])

    return (
        <div>
            <button style={{color: todo == 1 ? "red" : "black", cursor: "pointer"}} onClick={() => setTodo(1)}>Todo #1</button>

            <button style={{color: todo == 2 ? "red" : "black", cursor: "pointer"}} onClick={() => setTodo(2)}>Todo #2</button>

            <button style={{color: todo == 3 ? "red" : "black", cursor: "pointer"}} onClick={() => setTodo(3)}>Todo #3</button>

            <button style={{color: todo == 4 ? "red" : "black", cursor: "pointer"}} onClick={() => setTodo(4)}>Todo #4</button> {/* when we change the state the re-render happens and the updated color is seen */}

            <br/>

            {loading ? "Loading..." : todoData}
        </div>
    );
}