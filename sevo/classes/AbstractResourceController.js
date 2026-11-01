class AbstractController {
    constructor() {
        if (new.target === AbstractController) {
            throw new TypeError(
                "Cannot construct AbstractController instances directly",
            );
        }
    }

    index(req, res) {
        throw new Error("Method 'index' must be implemented.");
    }

    show(req, res) {
        throw new Error("Method 'show' must be implemented.");
    }

    create(req, res) {
        throw new Error("Method 'create' must be implemented.");
    }

    update(req, res) {
        throw new Error("Method 'update' must be implemented.");
    }

    delete(req, res) {
        throw new Error("Method 'delete' must be implemented.");
    }
}

module.exports = AbstractController;
