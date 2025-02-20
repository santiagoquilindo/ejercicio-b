const db = require("../config/database");

class UsuarioController {
    static async listarUsuarios(req, res) {
        let [usuarios] = await db.query("SELECT * FROM usuarios");
        res.json(usuarios);
    }

    static async registrarUsuario(req, res) {
        let { nombre, correo } = req.body;
        await db.query("INSERT INTO usuarios (nombre, correo) VALUES (?, ?)", [nombre, correo]);
        res.json({ mensaje: "Usuario registrado correctamente." });
    }

    static async consultarPrestamosUsuario(req, res) {
        let { id } = req.params;
        let [prestamos] = await db.query(`
            SELECT prestamos.id, libros.titulo, prestamos.fecha_prestamo, prestamos.fecha_devolucion 
            FROM prestamos
            JOIN libros ON prestamos.libro_id = libros.id
            WHERE prestamos.usuario_id = ?
        `, [id]);
        res.json(prestamos);
    }
}

module.exports = UsuarioController;
