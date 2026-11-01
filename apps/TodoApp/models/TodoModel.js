const db = require("../../../db");



class TodoModel {

    async _createTable() {
        await db.query("CREATE TABLE IF NOT EXISTS `db-express-todos-mysql`.`todos` (`id` INT NOT NULL AUTO_INCREMENT , `title` VARCHAR(255) NOT NULL , `text` TEXT NOT NULL , `completed` BOOLEAN NOT NULL DEFAULT FALSE , `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (`id`));");
    }


    async _dropTable() {
        await db.query("DROP TABLE IF EXISTS `todos`;");
    }


    async findAll() {
        const [rows, fields] = await db.query("SELECT * FROM `todos` ORDER BY `created_at` DESC;");
        return rows;

    }

    async findOne(id) {
        const [row, fields] = await db.execute("SELECT * FROM `todos` WHERE `id`=?;", [id]);
        return row[0];
    }

    async create(todo) {
        await db.execute("INSERT INTO `todos` (`title`, `text`, `completed`) VALUES (?, ?, ?);", [todo.title, todo.text, todo.completed]);
    }

    async update(id, todo) {
        await db.execute("UPDATE `todos` SET `title` = ?, `text` = ?, `completed` = ?, `updated_at` = NOW() WHERE `id` = ?;", [todo.title, todo.text, todo.completed, id]);
    }

    async destroy(id) {
        await db.execute("DELETE FROM `todos` WHERE `id` = ?;", [id]);
    }

    async execute(sql, values) {
        await db.execute(sql, values);
    }
}

module.exports = new TodoModel();




