const express = require("express");
const router = express.Router();
const controller = require("../controllers/livros");

router.get("/lista", controller.get);
router.get("/:genero", controller.getG);
router.post("/cadastrar/:id", controller.post);

module.exports = router