class AbstractModel {
    constructor() {
        if (new.target === AbstractModel) {
            throw new TypeError(
                "Cannot construct AbstractModel instances directly",
            );
        }
    }

    _createTable() {
        throw new Error("Method '_createTable' must be implemented.");
    }

    _dropTable() {
        throw new Error("Method '_dropTable' must be implemented.");
    }

    findAll() {
        throw new Error("Method 'findAll' must be implemented.");
    }

    findOne(id) {
        throw new Error("Method 'findOne' must be implemented.");
    }

    create(data) {
        throw new Error("Method 'create' must be implemented.");
    }

    update(id, data) {
        throw new Error("Method 'update' must be implemented.");
    }

    destroy(id) {
        throw new Error("Method 'destroy' must be implemented.");
    }
}

module.exports = AbstractModel;
