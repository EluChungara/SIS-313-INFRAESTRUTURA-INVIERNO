const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor APP1 activo');
});

app.listen(PORT, () => {
  console.log(`APP1 corriendo en puerto ${PORT}`);
});
