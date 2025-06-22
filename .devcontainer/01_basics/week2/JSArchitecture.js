function run() {
    console.log("I will run");
}

setTimeout(run, 5000); // setTimeout is another asynchronous function that executes a certain code after some time
// The setTimeout function will take function as an arg (callback)
// and it will call the function after 5000 ms = 5 s



// -----------------------------------------------------------------------------------------------

console.log("It is a normal log statement and will execute the first");
 // This can be run even before all the statements above
// since all the tasks are I/O bound tasks and take a few time to run (i.e. read a file)
sum = 0;
for(i = 0; i < 5; i++) {
    sum++;
}
console.log(sum);




// Important question: Here I have a doubt that if the for loop got executed after some time as 
// it was a CPU intensive task. But as soon as the for loop calculated sum then why didn't the 
// run() function was called as it was in the callback queue by the event loop. 
// Why we waited for the sum to be logged


// Answer:

// console.log(sum);

// This executes synchronously after the loop, logging 5 to the console.
// Now, 5 seconds have passed…

// The timer has run for 5 seconds
// But the callback (run function) doesn’t execute immediately!
// The event loop only processes callbacks when the call stack is empty. i.e all of the syncronous processes are over
// Since the call stack is now empty, the event loop picks up run() from the callback queue and executes it.

// It logs "I will run" to the console



// Refer for the architecture the website: http://latentflip.com/loupe/?code=ZnVuY3Rpb24gcnVuKCkgew0KICAgIGNvbnNvbGUubG9nKCJJIHdpbGwgcnVuIik7DQp9DQoNCnNldFRpbWVvdXQocnVuLCA1MDAwKTsgLy8gc2V0VGltZW91dCBpcyBhbm90aGVyIGFzeW5jaHJvbm91cyBmdW5jdGlvbiB0aGF0IGV4ZWN1dGVzIGEgY2VydGFpbiBjb2RlIGFmdGVyIHNvbWUgdGltZQ0KLy8gVGhlIHNldFRpbWVvdXQgZnVuY3Rpb24gd2lsbCB0YWtlIGZ1bmN0aW9uIGFzIGFuIGFyZyAoY2FsbGJhY2spDQovLyBhbmQgaXQgd2lsbCBjYWxsIHRoZSBmdW5jdGlvbiBhZnRlciA1MDAwIG1zID0gNSBzDQoNCg0KDQovLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLQ0KDQpjb25zb2xlLmxvZygiSXQgaXMgYSBub3JtYWwgbG9nIHN0YXRlbWVudCBhbmQgd2lsbCBleGVjdXRlIHRoZSBmaXJzdCIpOw0KIC8vIFRoaXMgY2FuIGJlIHJ1biBldmVuIGJlZm9yZSBhbGwgdGhlIHN0YXRlbWVudHMgYWJvdmUNCi8vIHNpbmNlIGFsbCB0aGUgdGFza3MgYXJlIEkvTyBib3VuZCB0YXNrcyBhbmQgdGFrZSBhIGZldyB0aW1lIHRvIHJ1biAoaS5lLiByZWFkIGEgZmlsZSkNCnN1bSA9IDA7DQpmb3IoaSA9IDA7IGkgPCA1OyBpKyspIHsNCiAgICBzdW0rKzsNCn0NCmNvbnNvbGUubG9nKHN1bSk7!!!
//              Call Stack                     |           Timer/WebAPI's
//                                             |
//                                             |
//                                             |
//                                             |
//                                             |
//                                             |
//                                             |
//                                             |
//                                             |
//                                             |
//                                             |
//    
//                Event Loop
//
//
// --------------------------------------------------------------------------------------------------
// Callback Queue                              |
//                                             |
//                                             |
//                                             |
//                                             |
//                                             |
//                                             |
