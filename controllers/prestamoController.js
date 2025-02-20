const db = require("../config/database");

class PrestamoController {
    static async listarPrestamos(req, res) {
        let [prestamos] = await db.query(`
            SELECT prestamos.id, libros.titulo, usuarios.nombre, prestamos.fecha_prestamo, prestamos.fecha_devolucion
            FROM prestamos
            JOIN libros ON prestamos.libro_id = libros.id
            JOIN usuarios ON prestamos.usuario_id = usuarios.id
        `);
        res.json(prestamos);
    }

    static async realizarPrestamo(req, res) {
        let { libro_id, usuario_id } = req.body;
        let fecha_prestamo = new Date();
        await db.query("INSERT INTO prestamos (libro_id, usuario_id, fecha_prestamo) VALUES (?, ?, ?)", 
                        [libro_id, usuario_id, fecha_prestamo]);
        res.json({ mensaje: "Préstamo registrado correctamente." });
    }

    static async devolverLibro(req, res) {
        let { id } = req.params;
        await db.query("UPDATE prestamos SET fecha_devolucion = NOW() WHERE id = ?", [id]);
        res.json({ mensaje: "Libro devuelto correctamente." });
    }
}

module.exports = PrestamoController;
