// for the procedure refer to the link: https://petal-estimate-4e9.notion.site/Atom-1247dfd1073580d7b26dd51751184b17

import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil"
import { counterAtom } from "./store/atoms/counterAtom.js";
// create an atom in the same file outside the component tree (this means here)
// or you can do it in seperate file (preferred)

export default function App() {
    return (
        <>
            <RecoilRoot>
                <Counter />
            </RecoilRoot>
        </>
    );
}

function Counter() {
    return (
        <>
            <CurrentCount />
            <IncreaseCount />
            <DecreaseCount />
        </>
    );
}

function CurrentCount() {
    // Here we are subscribed to the atom value hence this component will only get re-rendered
    // using the useRecoilValue hook
    let count = useRecoilValue(counterAtom);

    return (
        <div>
            {count}
        </div>
    );
}

function IncreaseCount() {
    // here we will get the atom setter so that we can update the atom value
    // but since we are only subscribed to the setter so no re-render will happen when the atom value is changed

    let setCount = useSetRecoilState(counterAtom);
    function increase() {
        setCount(c => c + 1);
    }
    // we will return the button
    return (
        <div>
            <button onClick={increase}>Increase</button>
        </div>
    );
}

function DecreaseCount() {
    // here we will get the atom setter so that we can update the atom value
    // but since we are only subscribed to the setter so no re-render will happen when the atom value is changed

    let setCount = useSetRecoilState(counterAtom);
    
    /*  -----------------------------------------------------------------------------------
        here we are subscribing to both the value and the setter hence the re-render will happen again for this
        so not doing this and only getting the setter value with the useRecoilState
    
    let [count, setCount] = useRecoilState(counterAtom);

    -----------------------------------------------------------------------------------     */
    function decrease() {
        setCount(c => c - 1);
    }
    // we will return the button
    return (
        <div>
            <button onClick={decrease}>Decrease</button>
        </div>
    );
}



// Always use version 18.3.1 for using recoil 
// becuase it is not compatible with the React 19 version