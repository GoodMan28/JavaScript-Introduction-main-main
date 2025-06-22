// create an express based todo
// where you will add, delete, update or mark the todo based on various routes
// and you will store the data into the json file(seperately we will update the json file in the route definition)

import express from "express";
import fs, { existsSync } from "fs";

const app = express(); // an instance of the express lib
let filepath = 'todos.json'; // name of the json file

// checking whether the file exists or not. If it does not exist then we will create one in the given format
if(!existsSync(filepath)) {
    fs.writeFileSync(filepath, JSON.stringify({
        "newTask": [],
        "deletedTask": [],
        "doneTask": []
    }, null, 2))
}

let filedata = fs.readFileSync(filepath, "utf-8");
let todoData = JSON.parse(filedata); // converts the normal filedata into the object

app.get('/add-:task', (req, res) => {
    // however we wont be going further with this idea because we will simply parse the add route and we will add the text written after the add route
    let decodedTask = req.params.task; // this will parse the task written after the -add
    todoData.newTask.push(decodedTask);
    fs.writeFileSync(filepath, JSON.stringify(todoData, null, 2), "utf-8"); // converting the object into the JSON file and writing it back into the json(each time we give a get request)
    res.send(`added a todo ${decodedTask}`);
    console.log(`added a todo ${decodedTask}`);
})
app.get('/del-:idx', (req, res) => {
    let decodedIdx = parseInt(req.params.idx);
    let temp = todoData.newTask[decodedIdx];
    // splicing the data frm the newTask
    if(temp != undefined) {
        todoData.newTask.splice(decodedIdx, 1);
        todoData.deletedTask.push(temp);
        // writing the json file
        fs.writeFileSync(filepath, JSON.stringify(todoData, null, 2), "utf-8");
        res.send(`Deleted the todo ${temp}`);
        console.log(`Deleted the todo ${temp}`);
    }
    else {
        // we made the else block because the when the server got the temp == null it kept waiting
        // and since there's no else, the server doesn't send a response
        // As a result:
        // The browser keeps waiting
        // You retry or reload
        // Or there's leftover state causing repeated processing
        res.status(400).send(`Invalid index: ${decodedIdx}`);
        console.log(`Attempted to delete invalid index: ${decodedIdx}`);
    }
})

// now writing the json file
app.listen(3000); // listening at the port 3000