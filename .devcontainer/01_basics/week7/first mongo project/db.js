import mongoose, { Schema } from "mongoose"

/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Model: In Mongoose, a model is a constructor function that represents a collection in MongoDB and provides the interface to interact with documents in that collection.
A Model is created from a Schema, and it is used to create, read, update, and delete documents from the MongoDB database.

Analogy with the SQL terms
DB => DB
Tables => Collections
Rows/Tuples => Document
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// Creating a schema 
const schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

// schema of users collection
const User = new Schema({
    username: {type: String, unique: true},
    password: String,
    name: String
})

// schema of todos collection
const Todo = new Schema({
    description: String,
    done: Boolean,
    userId: ObjectId
})

// Creating the models: Models are defined through the Schema interface
// The first argument is the singular name of the collection your model is for. Mongoose automatically looks for the plural version of your model name.
export const UserModel = mongoose.model('users', User);  
export const TodoModel = mongoose.model('todos', Todo);

