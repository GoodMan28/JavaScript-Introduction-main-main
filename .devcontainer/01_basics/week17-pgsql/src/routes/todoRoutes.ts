import express from "express";
import { addTodo, updateTodo, deleteTodo, toggleTodo } from "../controllers/todoController.js";

const todoRouter = express.Router();
todoRouter.use(express.json());
todoRouter.post("/addTodo", addTodo);
todoRouter.post("/updateTodo", updateTodo);
todoRouter.post("/deleteTodo", deleteTodo);
todoRouter.post("/toggle", toggleTodo);

// NOTE: /toggle is a dedicated route for flipping the `done` status.
// This is preferred over a generic updateTodo at enterprise scale because:
// ⚠️ Problems with using updateTodo for toggling at Enterprise Scale
// Issue                       Explanation
// Unclear intent         --   done: false in an update body is ambiguous — is it resetting, or was it just not included?
// Tight coupling         --   Any change to the updateTodo logic could unexpectedly affect the toggle behavior
// Authorization complexity -- You may want different RBAC rules: e.g., only the assignee can mark done, but a manager can edit the title
// Audit logging          --   Harder to distinguish "user edited the title" vs "user completed the task" in logs
// Input validation       --   Both flows share the same validator — you may need different required fields for each

export default todoRouter;