import { z } from 'zod';
import express from "express";

const app = express();

// Define the schema for profile update
// this schema is a "Run-time" object because: This is a JavaScript Object (specifically a Zod Schema). It exists while your code is running in the browser or Node.js.
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});


// 2. Using the zod type inference to get the type
type inferred_Type = z.infer<typeof userProfileSchema>;

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  
  // how to assign a type to updateBody?
  const updateBody: inferred_Type = req.body;
  // 1. Here we will get the type from the type inference

  if (!success) {
    res.status(411).json({});
    return
  }
  // update database here
  res.json({
    message: "User updated"
  })
});

app.listen(3000);