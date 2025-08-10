// memo : means memoizing the component and only changing when the props (for the particular child component) changes

import { useEffect, useState, memo } from "react";

export default function App() {
    return (
        <div>
            <Counter />
        </div>
    );
}

function Counter() {
    let [count, setCount,] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setCount(count => count + 1);
        }, 3000)
    }, [])

    return <>
        <MemoizedCurrentCount count={count}/>
        <MemoizedIncrease />
        <MemoizedDecrease />
    </>
}

let MemoizedCurrentCount = memo(function (props) {
    console.log("MemoizedCurrentCount RE-RENDERED 1");
    
    return (
        <div>
            {/* 1 */}
            {props.count}
            {/* Now since we have passed the state as the prop so it will re-render */}
        </div>
    );
})

let MemoizedIncrease = memo(function () {
    console.log("MemoizedIncrease RE-RENDERED 2");
    
    return (
        <div><button>Increase</button></div>
    );
})

let MemoizedDecrease = memo(function () {
    console.log("MemoizedDecrease RE-RENDERED 3");
    
    return (
        <div><button>Decrease</button></div>
    );
} )


// Since none of the memoized components receive props, 
// they will never re-render unless their parent component (App) forces it or props change