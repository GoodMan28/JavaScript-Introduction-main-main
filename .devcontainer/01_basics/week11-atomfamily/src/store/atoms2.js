// used for the selector family
// the syntax is comparable to the atoms2 of the week11-selector2

import {atomFamily, selectorFamily} from "recoil"
import axios from "axios"

export let todoAtomFamily = atomFamily({
    key: "todoAtomFamily",
    default: selectorFamily({
        key: "todoSelectorFamily",
        // here we will pass a parameter in the get so that we can give customized backend request
        get: (id) => async({get}) => {
                // now we will call the backend
                let response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
                return response.data;
            }
    })
})


// A selectorFamily is a powerful pattern that is similar to a selector, but allows you to pass parameters to the get and set callbacks of a selector.
// hence we first send a parameter id to the get callback
// this same pattern is observed in the default of the atom family


// also we can use Suspense and Error Boundary