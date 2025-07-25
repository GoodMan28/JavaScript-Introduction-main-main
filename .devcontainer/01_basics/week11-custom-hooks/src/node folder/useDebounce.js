// this is not a hook, here we only understand the usage of a useDebounce hook

// Basically when we type on amazon the backend request doesn't start as soon as we start typing any single alphabet
// this will create a spam of backend request
// to avoid this we usually DeBounce the search operation. i.e. we will wait for the typing to stop till 30 ms and after that finally send the backend request

// Hence when we send the request a clock will start for 30 ms 
// and as soon as a new thing is typed the old clock is cleared and a new clock is initiated

let clock; // global clock variable
function sendBackendRequest() {
    // fetch request
    console.log("Backend request is sent");
}

function debounceBackendRequest() {
    if(clock) {
        clearTimeout(clock); 
        // if any old clock exist then we will clear it first
    }
    clock = setTimeout(sendBackendRequest, 30); // start a clock for 30 ms
}

debounceBackendRequest();
debounceBackendRequest();
debounceBackendRequest();
debounceBackendRequest();
debounceBackendRequest();
debounceBackendRequest();

// since the request is sent in every 1ms, only the last request was able to complete the whole 30 ms clock