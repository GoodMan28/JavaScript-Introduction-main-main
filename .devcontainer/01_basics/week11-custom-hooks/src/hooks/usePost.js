// usePost hook

import { useEffect, useState } from "react";
export function usePost() {
    let [post, setPost] = useState({});

    async function getPost() {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        let json = await response.json();

        setPost(json);
        return;
    }
    // making the api call
    useEffect(() => {
        getPost(); // we made a call to the getPost because we directly cannot make a async function in the useEffect
    }, [])

    return {post, setPost};
    // this logic was originally a part original component
    // but this makes it very difficult for the UI Engineer to debug
    // so we will take all the logic to the custom hooks
}