// app.js
const express = require('express');
const app = express();

// Middlewares para poder procesar JSON y formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta principal de prueba
app.get('/', (req, res) => {
  res.send('Bienvenido a APP3 - Servidor de Aplicaciones 3');
});

// Puerto en el que corre la app
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`APP3 corriendo en el puerto ${PORT}`);
});
