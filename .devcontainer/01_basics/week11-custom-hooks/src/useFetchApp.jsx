// making the actual useFetch hook

import { useState } from "react";
import {useFetch} from "./hooks/useFetch.js"
export default function App() {
    let [url, setUrl] = useState(1);

    let {post, loading} = useFetch("https://jsonplaceholder.typicode.com/todos/" + url);
    // we also want a loading variable (boolean) to be returned by the useFetch hook
    return (
        <div>
            <div>{loading ? "Loading..." : post.title}</div>
            <button onClick={() => setUrl(1)}>1</button>
            <button onClick={() => setUrl(2)}>2</button>
            <button onClick={() => setUrl(3)}>3</button>
            <button onClick={() => setUrl(4)}>4</button>
        </div>
    );
}