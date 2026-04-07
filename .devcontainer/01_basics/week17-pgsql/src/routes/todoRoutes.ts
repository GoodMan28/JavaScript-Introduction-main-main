import express from "express";

const todoRouter = express.Router();

todoRouter.post("/addTodo", );
todoRouter.post("/updateTodo", );
todoRouter.post("/deleteTodo", );
todoRouter.post("/toggle", );

// here we will mark the todo to done using the update Todo route rather any extra route
// problem with this at enterprise grade
// ⚠️ Problems at Enterprise Scale
// Issue	         Explanation
// Unclear intent----   done: false in an update body is ambiguous — is it resetting, or was it just not included?
// Tight coupling----  	 Any change to the updateTodo logic could unexpectedly affect the toggle behavior
// Authorization complexity----	  You may want different RBAC rules: e.g., only the assignee can mark done, but a manager can edit the title
// Audit logging----	Harder to distinguish "user edited the title" vs "user completed the task" in logs
// Input validation----	Both flows share the same validator — you may need different required fields for each