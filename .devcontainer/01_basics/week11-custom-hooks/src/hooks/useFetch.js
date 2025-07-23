// this hook fetches the data from the backend from a generic url not a specific one

import { useEffect, useState } from "react";

export function useFetch(url) {
    let [loading, setLoading] = useState(true);
    let [post, setPost] = useState({});

    async function getPost(url) {
        console.log("get post called");
        setLoading(true);
        let response = await fetch(url);
        let json = await response.json();
        setLoading(false);
        setPost(json);
    }

    useEffect(() => {
        getPost(url);
    }, [url]) 
    // whenever the url changes in the App component by clicking the button then the useEffect is called
    // suppose we removed the useEffect function then the getPost() will always be called 
    // and the post state will be setted infinintely and the infinite re-renders would happen

    // now we will call the useFetch function with the re-fetch in every 10 seconds
    useEffect(() => {
        let timer = setInterval(() => {
            setLoading(true);
            getPost(url);
            setLoading(false);
        }, 10000);

        return () => {
            clearInterval(timer)
        }

    }, [url])

    return {
        post,
        loading
    }
}