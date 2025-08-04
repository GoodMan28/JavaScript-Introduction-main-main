import express from "express"
const app = express();

// the data of the patients
let users = [{
    name: "John",
    kidneys: [{
        healthy: true
    }, {
        healthy: true
    }]
}, {
    name: "Doe",
    kidneys: [{
        healthy: false
    }, {
        healthy: true
    }]
}]

app.use(express.json()); // this is used to parse the json in the body /// important
// checking kidney info
/// for get request one of the most popular input method is query parameter
app.get('/', (req, res) => {
    let johnKidneys = users[0].kidneys;
    let healthyKidneys = 0;
    let totalKidneys = johnKidneys.length;
    // counting total healthy kidneys and total kidneys
    for(let i of johnKidneys) {
        // i is array of objects
        if(i.healthy) healthyKidneys++;
    }
    let unhealthyKidneys = totalKidneys - healthyKidneys;
    // now we will send the data as JSON file
    res.json({
        healthyKidneys,
        unhealthyKidneys,
        totalKidneys
    })
})

app.get('/files/:filename', (req, res) => {
    let filename = req.params.filename;
    console.log(`filename is ${filename}`);
    res.send(`filename is ${filename}`);
}) 

// putting new kidney
/// for post request one of the most popular input method is body parameter
// we will pass this in the body whether to add a healthy kidney or the unhealthy one
app.post('/', (req, res) => {
    let isHealthy = req.body.isHealthy; // the user will pass the type of kidney to be fitted in him in the body
    let kidneyData = users[0].kidneys; // kidney array
    kidneyData.push({
        healthy: isHealthy
    })

    res.json({
        "msg": "job done!" // we can check whether it is inserted 
    })
    // confirmation to the user since he doesn't need the kidney data
})

// updating kidney with damaged ones
app.put('/', (req, res) => {
    // making all the kidneys healthy
    if(atLeastOneBadKidney(users[0].kidneys)) {
        let kidney = users[0].kidneys;
        for(let i = 0; i < kidney.length; i++) {
            kidney[i].healthy = true;
        }
        res.json({
            "msg": "job done!"
        }); // just a formality so that the screen is not hung
    }
    else {
        res.status(411).json({
            "msg": "error",
            "desc": "wrong i/p"
        })
    }
})

// removing kidneys
app.delete('/', (req, res) => {
    // removing the umhealthy kidneys
    // first validating whether we have any bad kidneys or not
    if(atLeastOneBadKidney(users[0].kidneys)) {
        let newKidneys = []; 
        for(let i = 0; i < users[0].kidneys.length; i++) {
            if(users[0].kidneys[i].healthy) {
                newKidneys.push(users[0].kidneys[i]);
            }
        }
        users[0].kidneys = newKidneys;
        res.send({
            "msg": "job done!"
        });
    }
    else {
        res.status(411).json({
            "msg": "error",
            "desc": "wrong i/p"
        })
    }

})

function atLeastOneBadKidney(kidneys) {
    let ans = false;
    for(let i = 0; i < kidneys.length; i++) {
        if(!kidneys[i].healthy) {
            ans = true;
            break;
        }
    }
    return ans;
}

app.listen(3000);