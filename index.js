const express = require("express");


const app = express();

app.use(express.json());
app.use(cors());


app.use("/api/libros", require("./routes/libroRoutes"));
app.use("/api/usuarios", require("./routes/usuarioRoutes"));
app.use("/api/prestamos", require("./routes/prestamoRoutes"));


const PORT = 9099;
app.listen(PORT, () => {
    console.log(` Servidor corriendo en puerto: ${PORT}`);
});
