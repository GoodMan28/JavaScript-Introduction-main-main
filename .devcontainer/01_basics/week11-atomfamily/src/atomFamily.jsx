import {RecoilRoot, useRecoilValue} from "recoil"
import { todoAtomFamily } from "./store/atoms.js";
export default function App() {
    // the main theory is that we have to dynamically create atoms as we create todos
    // hence we will use atoms family where the atom default value retrueved from the DB or an object
    // and the todos can be accessed from the todos.js

    return (
        <>
            <RecoilRoot>
                <Todo id={1} />
                <Todo id={2} />
                {/* even when we create more components of the id = 2 then also same atom will be called and
                whenever one of the title is changed, all of them are changed */}
            </RecoilRoot>
        </>
    )
}

function Todo({id}) {
    // the below statement returns us an atom which is individual for each todo
    // hence this doesn't cause any re-render for all atoms as we are dynamicallty creating an atom
    let todo = useRecoilValue(todoAtomFamily(id));
    // we get the todo from the atom family which further takes it from the todos.js

    return <div style={{borderBlockColor:"beige"}}>
        <div>{todo.id}</div>
        <div>{todo.title}</div>
    </div>
}
