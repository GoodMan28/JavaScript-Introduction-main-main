// Context api
// The Context API is a powerful feature in React that enables you to manage state across your application more effectively,
// especially when dealing with deeply nested components.
// The Context API provides a way to share values (state, functions, etc.)
// between components without having to pass props down manually at every level.

// ### Jargon

// - **Context**: This is created using `React.createContext()`. It serves as a container for the data you want to share.
// - **Provider**: This component wraps part of your application and provides the context value to all its descendants. Any component that is a child of this Provider can access the context.
// - **Consumer**: This component subscribes to context changes. It allows you to access the context value (using `useContext`  hook)

import { createContext, useContext, useState } from "react";
import "./App.css";

let BulbContext = createContext(); // here we created a context so it we can wrap the data into it

// making the BulbContext provider syntax cleaner
function BulbProvider({children}) {
    let [bulbOn, setBulbOn] = useState(true);

    return (
        <BulbContext.Provider value={{
            bulbOn: bulbOn,
            setBulbOn: setBulbOn
        }}>
            {children}
        </BulbContext.Provider>
    );
}

export default function App() {
    // let [bulbOn, setBulbOn] = useState(true); Moving the state into the BulbProvider

    // suppose we want to provide the context to the Light component so we will wrap the Light component inside the BulbContext.Provider
    return (
        // <>
        //     <BulbContext.Provider value={{
        //         bulbOn: bulbOn,
        //         setBulbOn: setBulbOn
        //     }}>
        //         <Light />
        //     </BulbContext.Provider>
        // </>


        // cleaner syntax by making our custom provider component
        <BulbProvider>
            <Light />
        </BulbProvider>
    );
}

function Light() {

    return (
        <>
            <LightBulb />
            <LightSwitch />
        </>
    );
}

function LightBulb() {
    // now consuming the state variables using the useContext
    let {bulbOn} = useContext(BulbContext);
    return (
        <>
            <div>{bulbOn ? "Bulb On" : "Bulb Off"}</div>
        </>
    );
}

function LightSwitch() {

    // now consuming the state variables using the useContext
    let {setBulbOn} = useContext(BulbContext);
    function toggle() {
        setBulbOn((currentState) => !currentState);
    }

    return (
        <>
            <button onClick={toggle}>Toggle</button>
        </>
    );
}
