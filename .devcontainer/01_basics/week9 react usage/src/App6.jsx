// Here we will learn about the lists and keys

export default function App() {
    let todos = [
        {
            title: "Go to Gym",
            done: true
        },
        {
            title: "Eat food",
            done: false
        }
    ]

    // now we will render this in the following process:
    // first we will convert each todo into a <Todo> component using a map and put all the components into a list(known as components)
    // and directly render the list of components into it

    // made the list of components
    let components = todos.map((todo, index) => {
        return (
            <Todo key={index} title={todo.title} done={todo.done}></Todo>
        );
    })

    // directly rendering the list of components
    return (
        <div>{components}</div>
    );
}

function Todo(props) {
    return (
        <div>
            <li>{props.title} - {props.done ? "Done!" : "Not Done!"}</li>
        </div>
    );
}