// Use of selectorFamily: As we have learned earlier that whenever we need to make a 
// backend request, then the selector is used

// IMPORTANT
// So when we have multiple todos from the backend hence we need a selector family for each backend request
// and this one is also cached because when same id todo is called multiple times only one request is sent

import {RecoilRoot, useRecoilValue} from "recoil"
import { todoAtomFamily } from "./store/atoms2.js";
export default function App() {
    return (
        <>
            <RecoilRoot>
                <Todo id={1} />
                <Todo id={2} />
                <Todo id={2} />
                {/* even when multiple id = 2 are there but only one network request is there */}
            </RecoilRoot>
        </>
    )
}

function Todo({id}) {
    let todo = useRecoilValue(todoAtomFamily(id));

    return <div style={{borderBlockColor:"beige"}}>
        <div>{todo.id}</div>
        <div>{todo.title}</div>
    </div>
}
