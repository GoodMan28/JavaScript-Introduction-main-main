// harder approach

import { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]); // whenever a new value is passed beciase of any re-render the old clock is cleared and a new clock is made

    return debouncedValue;
};

export default function App() {
    let [inputVal, setInputVal] = useState("");
    let debouncedVal = useDebounce(inputVal, 300); 
    // this hook gives us a proper debounced value after the inputVal is frequently changed

    function change(e) {
        setInputVal(e.target.value); // same document.getElementById("id").value
        // e is the event which is given by the onChange attribute
    }

    useEffect(() => {
        // expensive operation here
        console.log("Fetch operation");
    }, [debouncedVal])
    
    return (
        <>
            <input type="text" onChange={change} placeholder="Enter the text" ></input>
        </>
    );
}
// in the onchange attribute the function we provide has a default parameter (e) "event"




// Runtime logic

/*
1.React renders the component.

2.During rendering:

    const [inputVal, setInputVal] = useState("") initializes the state.

    const debouncedValue = useDebounce(inputVal) calls the custom hook with inputVal. This value is initially "".

3.The change function is just defined — it doesn't run until the user interacts.

4.The <input> element is rendered, and onChange={change} is registered.

5.When the user types something:

    change(e) is called.

6.This sets the new value via setInputVal(e.target.value).

7.This triggers a re-render.

8.On re-render:

    useDebounce(inputVal) is called again with the updated value.

    debouncedValue updates after a delay (depending on your debounce logic).

    Once debouncedValue changes, the useEffect hook runs. And the backend request is sent

*/