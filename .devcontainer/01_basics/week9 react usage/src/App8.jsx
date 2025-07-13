// Here we will learn about the fragments
// When we return a jsx we need to return it under a parent div. This does nothing in the UI but adds an extra layer of nesting
// To tackle this we do the follwoing

import { Fragment } from "react";

export default function App() {
    return (
        <>
            <div>Hi There</div>
            <div>Hello</div>
        </>
    );
}

// now the divs are directly under the root div not inside another div unnecessarily

// Or we can do the following very as the previous one

// export default function App() {
//     return (
//         <Fragment>
//             <div>Hi There</div>
//             <div>Hello</div>
//         </Fragment>
//     );
// }