// easier approach

import { useRef } from "react";

function useDebounce(originalfn) {
    let timerRef = useRef(); // in normal fuction(in node folder) we created a global variable but here we will create a reference

    return () => {
        clearTimeout(timerRef.current); // clearing the existing clock
        timerRef.current = setTimeout(originalfn, 300);
    }
}

export default function App() {
    async function sendBackendRequest() {
        fetch("https://jsonplaceholder.typicode.com/todos/1");
    }

    let debounceRequest = useDebounce(sendBackendRequest);

    return (
        <>
            <input type="text" onChange={debounceRequest} placeholder="Enter the text" ></input>
        </>
    );
}