const db = require("./db");

console.log("db test");

// db.execute("SELECT * FROM people", []).then(result => {
//     const [rows, fields] = result;
//     console.log(rows);
// }).catch(error => {
//     console.log(error);
// });

class TodoModel {
    async createTable() {
        // await db.query(
        //     "CREATE TABLE IF NOT EXISTS `db-express-todos-mysql`.`todos` (`id` INT NOT NULL AUTO_INCREMENT , `title` VARCHAR(255) NOT NULL , `text` TEXT NOT NULL , `completed` BOOLEAN NOT NULL DEFAULT FALSE , `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (`id`));",
        // );
        await db.query(
            "CREATE TABLE IF NOT EXISTS `todos` (`id` INT NOT NULL AUTO_INCREMENT , `title` VARCHAR(255) NOT NULL , `text` TEXT NOT NULL , `completed` BOOLEAN NOT NULL DEFAULT FALSE , `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (`id`));",
        );
    }

    async dropTable() {
        await db.query("DROP TABLE IF EXISTS `todos`;");
    }

    async findAll() {
        const [rows, fields] = await db.query("SELECT * FROM `todos`;");

        return rows;
    }

    async findOne(id) {
        const [row, fields] = await db.execute(
            "SELECT * FROM `todos` WHERE `id`=?;",
            [id],
        );
        return row;
    }

    async create(todo) {
        await db.execute(
            "INSERT INTO `todos` (`title`, `text`, `completed`) VALUES (?, ?, ?);",
            [todo.title, todo.text, todo.completed],
        );
    }

    async update(id, todo) {
        await db.execute(
            "UPDATE `todos` SET `title` = ?, `text` = ?, `completed` = ?, `updated_at` = NOW() WHERE `id` = ?;",
            [todo.title, todo.text, todo.completed, id],
        );
    }

    async destroy(id) {
        await db.execute("DELETE FROM `todos` WHERE `id` = ?;", [id]);
    }
}

async function main() {
    const todo = new TodoModel();
    // todo.createTable();
    // todo.dropTable();

    // todo.create({title: "First Todo", text: "Text...", completed: false});
    // todo.create({title: "Second Todo", text: "Text...", completed: true});
    // const allTodos = await todo.findAll();
    // console.log(allTodos);

    // const oneTodo = await todo.findOne(2);
    // console.log(oneTodo);
    await todo.update(2, {
        title: "Second Todo updated",
        text: "Text",
        completed: true,
    });

    const allTodos = await todo.findAll();
    console.log(allTodos);
}

main();

console.log(new Date().toISOString());
