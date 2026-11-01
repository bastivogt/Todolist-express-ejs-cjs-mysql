const db = require("./db");
const TodoModel = require("./apps/TodoApp/models/TodoModel");

const todos = [
    {
        title: "First Todo",
        text: "This is the first todo item",
        completed: false,
    },
    {
        title: "Second Todo",
        text: "This is the second todo item",
        completed: true,
    },
];

async function main() {
    try {
        for(const todo of todos) {
            await TodoModel.create(todo)
        }
    }catch(error) {
        console.error(error);
    }finally {
        await db.end();
    }
    
}

main();

