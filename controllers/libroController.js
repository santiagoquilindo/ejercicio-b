const db = require("../config/database");

class LibroController {
    static async listarLibros(req, res) {
        let [libros] = await db.query("SELECT * FROM libros");
        res.json(libros);
    }

    static async agregarLibro(req, res) {
        let { titulo, autor, ano_publicacion, disponible } = req.body;
        await db.query("INSERT INTO libros (titulo, autor, ano_publicacion, disponible) VALUES (?, ?, ?, ?)", 
                        [titulo, autor, ano_publicacion, disponible ?? true]);
        res.json({ mensaje: "Libro agregado correctamente." });
    }

    static async actualizarLibro(req, res) {
        let { id } = req.params;
        let { titulo, autor, ano_publicacion, disponible } = req.body;
        await db.query("UPDATE libros SET titulo = ?, autor = ?, ano_publicacion = ?, disponible = ? WHERE id = ?", 
                        [titulo, autor, ano_publicacion, disponible, id]);
        res.json({ mensaje: "Libro actualizado correctamente." });
    }

    static async eliminarLibro(req, res) {
        let { id } = req.params;
        await db.query("DELETE FROM libros WHERE id = ?", [id]);
        res.json({ mensaje: "Libro eliminado correctamente." });
    }
}

module.exports = LibroController;
