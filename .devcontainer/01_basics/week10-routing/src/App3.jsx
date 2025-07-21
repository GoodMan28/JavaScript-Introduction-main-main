// Here we will be learning about the useRef hook 
// It is a method to select a DOM element. Just like the document.getElementById("")

// document.getElementById("id").focus() => sampleRef.current.focus()

import { useRef } from "react";

export default function App() {
    // create a reference for the input element
    let inputRef = useRef();

    // Define a function that focuses on the input element
    function doFocus() {
        // access the dom element using ref and focusing on it
        inputRef.current.focus();
    }

    return (
        <>
            <input ref={inputRef} placeholder="Enter Name"></input>
            <input placeholder="Enter roll"></input>
            <button style={{cursor: "pointer"}} onClick={doFocus}>Focus on name</button>
        </>
    );
}