const { program } = require("commander");
const fs = require("fs");

// Filesystem based todo list. Create a `cli` that lets a user
// 1. Add a todo
// 2. Delete a todo
// 3. Mark a todo as done
// Store all the data in files (todos.json)

program
    .option('-a, --add <string>', 'option that will indicate that we need to add a todo along with the todo to add')
    .option('-d, --delete <int>', 'option to indicate that we need to delete a todo along with the task to delete')
    .option('-t, --tick <int>', 'option that we need to mark complete');

program.parse();

let options = program.opts();

let addend = options.add ? options.add : undefined; // the new task that needs to be added
let del = options.delete ? options.delete : undefined; // the index of task needs to be deleted
let done = options.tick ? options.tick : undefined; // the index of task needs to be marked

// we will import the each of the array from the todo.json file and each time we will update each array in the object
let filepath = "todos.json";

// STEP 1: File Existence Check
// checking if the file exists else we will create a json file
if(!fs.existsSync(filepath)) {
    fs.writeFileSync(filepath, JSON.stringify({
        newTask: [],
        deletedTask: [],
        doneTask: []
    }, null, 2));
}
// JSON.stringify({ ... }, null, 2):
// Converts the object to JSON format.
// The null, 2 makes it pretty-printed (indented) for readability.

// STEP 2: Read the File
let filedata = fs.readFileSync(filepath, "utf-8");
let todoData = JSON.parse(filedata);
// readFileSync(...) reads the contents of todos.json as a string.
// JSON.parse(...) converts the string into a JavaScript object todoData

// Now making the changes into the todoData using various options
if(options.add != undefined) {
    todoData.newTask.push(options.add);
}
else if(options.delete != undefined) {
    let idx = parseInt(options.delete); // we use parseInt because in commander the default options value is treated as string even when we have specified <int> with delete
    let temp = todoData.newTask[idx]; 
    if(temp != undefined) {
        todoData.deletedTask.push(temp);
        todoData.newTask.splice(idx, 1);
    }
}
else if(options.tick != undefined) {
    let idx = parseInt(options.tick);
    let temp = todoData.newTask[idx];
    if(temp != undefined) {
        todoData.doneTask.push(temp);
        todoData.newTask.splice(idx, 1);
    }
}

// now writing the file with the json file
fs.writeFileSync(filepath, JSON.stringify(todoData, null, 2));

// -------------------------------------------------------------------------------------------------------
// FOR MORE INFO 
// check this thread for the last 3 questions : https://chatgpt.com/share/682b9211-7714-8013-bfae-8ac1cce94b59