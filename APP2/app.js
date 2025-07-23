const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Bienvenido a APP2 - Servidor de Aplicaciones 2');
});

app.listen(3000, () => {
  console.log('APP2 corriendo en el puerto 3000');
});
