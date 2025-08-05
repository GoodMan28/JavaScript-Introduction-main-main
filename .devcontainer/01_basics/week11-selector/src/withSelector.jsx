import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil"
import { counterAtom, isEven } from "./store/atoms/counter"

export default function App() {

    return (
        <>
            <RecoilRoot>
                <Counter />
                <Buttons /> {/* This will render two buttons Increase(incr by 2) and Decrease(decr by 1) */}
                <IsEven /> {/* This renders whther the number is even or not */}
            </RecoilRoot>
        </>
    )
}

function Counter() {
    let count = useRecoilValue(counterAtom);

    return <div>
        {count}
    </div>
}

function Buttons() {
    let setCount = useSetRecoilState(counterAtom);

    function increase() {
        setCount(c => c+2)
    }

    function decrease() {
        setCount(c => c-1)
    }

    return <div>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
    </div>
}

function IsEven() {
    let even = useRecoilValue(isEven);

    return <div>
        {even ? "Even" : "Odd"}
    </div>
}
// Our main idea is that the "IsEven" component will subscribe to the "IsEvenSelector" so when we increase by 2
// the IsEvenSelector returns the same value hence "IsEven" component doesn't re-render