function sum(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function divide(a, b) {
    return a / b;
  }
  

// Here we are passing the function name as argument and calling it further in the doOperation func
// If we had called op() i.e. had parenth with that, then we would have passed the values to the func
  function doOperation(a, b, op) {
    return op(a, b)
  }
  
  console.log(doOperation(1, 2, sum))