const greet3 = (name: any) => `Hello, ${name}!`;


// here this will give error since in the config file we have set the "noImplicitAny": true 
// which does not allow any variable to be implicitly declared as "any" type