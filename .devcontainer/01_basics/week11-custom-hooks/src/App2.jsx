// making the usePost hook
// which will make a backend api call under the useEffect hook

import {usePost} from "./hooks/usePost.js"
export default function App() {
    let {post} = usePost();
    return (
        <div>
            {post.title}
        </div>
    );
}