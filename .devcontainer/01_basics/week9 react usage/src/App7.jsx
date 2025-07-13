// Here we will learn about the error boundaries

// This is still not implemented yet on Functional Components, this is used when a particular component crashes,
// then instead of crashing the whole website, the particular component is crashed
// We pass the Component as the children to the Error Boundary class

// Take the error boundary as a black box
import React from "react";

// Error boundary class

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Error caught:", error, info);
    }

    render() {
        if (this.state.hasError) {
            // returning the fallback UI in the same card format 
            return (<div style={{backgroundColor: "green", height: 20, width: 200, borderRadius: 5, textAlign: "center", marginBottom: 10}}>Something went Wrong</div>);
        }

        return this.props.children;  // here the errorneous component will be passed as the children
    }
}

export default function App() {
    // we will return two cards with one returning error
    return (
        <div>
            <ErrorBoundary>
                <Card1 content={"Hi There"}></Card1>
            </ErrorBoundary>

            <ErrorBoundary>
                <Card2></Card2>
            </ErrorBoundary>
        </div>
    );
}

// Non buggy component
function Card1(props) {
    return (
        <div style={{backgroundColor: "green", height: 20, width: 200, borderRadius: 5, textAlign: "center", marginBottom: 10}}>{props.content}</div>
    );
}

// Buggy Component
function Card2() {
    throw new Error;
}