import type { Request, Response } from "express";
import { client } from "../db.js";

// POST /addTodo
// Body: { todoName: string }
export const addTodo = async (req: Request, res: Response): Promise<void> => {
    const { todoName } = req.body;

    if (!todoName || typeof todoName !== "string" || todoName.trim() === "") {
        res.status(400).json({ error: "todoName is required and must be a non-empty string." });
        return;
    }

    try {
        const result = await client.query(
            `INSERT INTO todos (todoName) VALUES ($1) RETURNING *`,
            [todoName.trim()]
        );
        res.status(201).json({ message: "Todo created successfully.", todo: result.rows[0] });
    } catch (err) {
        console.error("Error in addTodo:", err);
        res.status(500).json({ error: "Internal server error while creating todo." });
    }
};

// POST /updateTodo
// Body: { id: number, todoName: string }
export const updateTodo = async (req: Request, res: Response): Promise<void> => {
    const { id, todoName } = req.body;

    if (!id || !todoName || typeof todoName !== "string" || todoName.trim() === "") {
        res.status(400).json({ error: "id and a non-empty todoName are required." });
        return;
    }

    try {
        const result = await client.query(
            `UPDATE todos
             SET todoName = $1, updated_at = CURRENT_TIMESTAMP
             WHERE id = $2
             RETURNING *`,
            [todoName.trim(), id]
        );

        if (result.rowCount === 0) {
            res.status(404).json({ error: `Todo with id ${id} not found.` });
            return;
        }

        res.status(200).json({ message: "Todo updated successfully.", todo: result.rows[0] });
    } catch (err) {
        console.error("Error in updateTodo:", err);
        res.status(500).json({ error: "Internal server error while updating todo." });
    }
};

// POST /deleteTodo
// Body: { id: number }
export const deleteTodo = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.body;

    if (!id) {
        res.status(400).json({ error: "id is required." });
        return;
    }

    try {
        const result = await client.query(
            `DELETE FROM todos WHERE id = $1 RETURNING *`,
            [id]
        );

        if (result.rowCount === 0) {
            res.status(404).json({ error: `Todo with id ${id} not found.` });
            return;
        }

        res.status(200).json({ message: "Todo deleted successfully.", todo: result.rows[0] });
    } catch (err) {
        console.error("Error in deleteTodo:", err);
        res.status(500).json({ error: "Internal server error while deleting todo." });
    }
};

// POST /toggle
// Body: { id: number }
// Flips the current `done` status of the todo
export const toggleTodo = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.body;

    if (!id) {
        res.status(400).json({ error: "id is required." });
        return;
    }

    try {
        const result = await client.query(
            `UPDATE todos
             SET done = NOT done, updated_at = CURRENT_TIMESTAMP
             WHERE id = $1
             RETURNING *`,
            [id]
        );

        if (result.rowCount === 0) {
            res.status(404).json({ error: `Todo with id ${id} not found.` });
            return;
        }

        res.status(200).json({ message: "Todo toggled successfully.", todo: result.rows[0] });
    } catch (err) {
        console.error("Error in toggleTodo:", err);
        res.status(500).json({ error: "Internal server error while toggling todo." });
    }
};
