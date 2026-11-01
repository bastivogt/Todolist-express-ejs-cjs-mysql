//import TodoController from "./controllers/TodoController.js";
//import express from "express";

const express = require("express");
const TodoController = require("./controllers/TodoController.js");

const router = express.Router();

router.get("/", TodoController.index);
router.get("/create", TodoController.create);
router.post("/store", TodoController.store);

router.get("/:id/delete", TodoController.delete);
router.post("/destroy", TodoController.destroy);
router.get("/:id/edit", TodoController.edit);
router.post("/:id/update", TodoController.update);
router.get("/:id", TodoController.show);

module.exports = router;
