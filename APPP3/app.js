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

const express = require('express');
const app = express();
app.use(express.json());

let items = []; // Arreglo para simular una base de datos
let idCounter = 1;

// CREATE - Agregar un nuevo ítem
app.post('/items', (req, res) => {
  const newItem = {
    id: idCounter++,
    name: req.body.name || 'Sin nombre'
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// READ - Ver todos los ítems
app.get('/items', (req, res) => {
  res.json(items);
});

// READ - Ver un solo ítem por ID
app.get('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ message: 'Ítem no encontrado' });
  res.json(item);
});

// UPDATE - Modificar un ítem por ID
app.put('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ message: 'Ítem no encontrado' });
  item.name = req.body.name || item.name;
  res.json(item);
});

// DELETE - Eliminar un ítem por ID
app.delete('/items/:id', (req, res) => {
  const index = items.findIndex(i => i.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Ítem no encontrado' });
  const deleted = items.splice(index, 1);
  res.json(deleted[0]);
});

// Ruta base
app.get('/', (req, res) => {
  res.send('Bienvenido a APP3 con funcionalidad CRUD');
});

app.listen(3000, () => {
  console.log('APP3 corriendo en el puerto 3000');
});
