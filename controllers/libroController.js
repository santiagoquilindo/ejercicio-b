const Libro = require('../models/libro');

exports.obtenerLibros = async (req, res) => {
    const [libros] = await Libro.obtenerLibros();
    res.json(libros);
};

exports.agregarLibro = async (req, res) => {
    await Libro.agregarLibro(req.body);
    res.json({ mensaje: "Libro agregado correctamente." });
};

exports.actualizarLibro = async (req, res) => {
    await Libro.actualizarLibro(req.params.id, req.body);
    res.json({ mensaje: "Libro actualizado correctamente." });
};

// Eliminar un libro
exports.eliminarLibro = async (req, res) => {
    await Libro.eliminarLibro(req.params.id);
    res.json({ mensaje: "Libro eliminado correctamente." });
};
