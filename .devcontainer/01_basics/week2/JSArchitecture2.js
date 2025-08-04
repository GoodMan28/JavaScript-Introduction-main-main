


// -----------------------------------------------------------------------------------------------
function funct1() {
    console.log("It is a normal log statement and will execute the first");

    function run() {
        console.log("I will run1");
    }

    setTimeout(run, 4000);

    sum = 0;
    for (i = 0; i < 100000000; i++) {
        sum++;
    }
    console.log(sum);
}


function funct2() {
    console.log("It is a normal log statement and will execute the first");

    function run() {
        console.log("I will run2");
    }

    setTimeout(run, 8000);

    sum = 0;
    for (i = 0; i < 1000000; i++) {
        sum++;
    }
    console.log(sum);
}

funct1();
funct2();