// the useRecoilStateLoadable and the useRecoilValueLoadable are same as the useRecoilState or value

// only difference is that we get 
// state and content member with it


import {RecoilRoot, useRecoilValueLoadable} from "recoil"
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
    let todo = useRecoilValueLoadable(todoAtomFamily(id));
    // same goes with the useRecoilStateLoadable only extra thing is that we get a state updation function
    // state and contents
    if(todo.state === "loading") {
        return <div>
            loading...
        </div>
    }
    else if(todo.state === "hasValue") {
        return <div style={{borderBlockColor:"beige"}}>
            <div>{todo.contents.id}</div>
            <div>{todo.contents.title}</div>
        </div>
    }
    else {
        return <div>
            Error occurred while getting the backend request
        </div>
    }
}
