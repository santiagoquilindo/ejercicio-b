const express = require("express");
const LibroController = require("../controllers/libroController");

const router = express.Router();

router.get("/", LibroController.listarLibros);
router.post("/", LibroController.agregarLibro);
router.put("/:id", LibroController.actualizarLibro);
router.delete("/:id", LibroController.eliminarLibro);

module.exports = router;
