// Now we will be adding the posts by taking the user input
// And printing the post components using the map
// Refer ".devcontainer/01_basics/week9 react/react project/App4.jsx"

import { useState } from "react";
import PostComponent from "./Post.jsx"
export default function App() {
  let [posts, setPosts] = useState([]);
  function addPost() {
    let post = {
      name: document.getElementById("name").value,
      time: document.getElementById("time").value,
      subtitle: document.getElementById("subtitle").value,
      content: document.getElementById("content").value,
      src: document.getElementById("src").value
    }
    setPosts([...posts, post]); // now the re-render will happen
  }
  return (
    <div style={{backgroundColor: "#dfe6e9", height: "100vh", paddingTop: 10}}>
      <div>
        <input placeholder="Name" id="name" type="text"></input>
        <input placeholder="Time" id="time" type="text"></input>
        <input placeholder="Subtitle" id="subtitle" type="text"></input>
        <input placeholder="Content" id="content" type="text"></input>
        <input placeholder="image src" id="src" type="text"></input>
        <button onClick={addPost} style={{cursor:"pointer"}}>Add</button>
      </div>
      <div style={{display: "flex", justifyContent: "center"}}>
        <div>
          {
            posts.map((p, index) => {
              return (<div>
                <PostComponent key={index} name={p.name} time={p.time} subtitle={p.subtitle} content={p.content} src={p.src}></PostComponent>
                <br/>
              </div>);
            })
          }
        </div>
      </div>
    </div>
    
  );
}
