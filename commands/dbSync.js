const TodoModel = require("../apps/TodoApp/models/TodoModel");
const db = require("../db");

async function main() {
    await TodoModel._createTable();
    db.end();
}

main();
