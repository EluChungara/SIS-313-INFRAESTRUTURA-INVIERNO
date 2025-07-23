# SIS313: Configuración de APP3
esta seccion idnica como se desarrollo la app3

La infraestructura general incluye:

**APP3** con Node.js


---

## Instalación de Dependencias

**Sistema Operativo:** Ubuntu Server 24.04 LTS

En la máquina virtual asignada a **APP3** (IP: `10.0.1.13`), ejecuté los siguientes comandos para instalar Node.js y npm:

```bash
sudo apt update
sudo apt install nodejs npm -y
```
Verifiqué las versiones con:

node -v
npm -v
### Configuración de la Aplicación
Crear directorio de la aplicación

```
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Bienvenido a APP3 - Servidor de Aplicaciones 3');
});

app.listen(3000, () => {
  console.log('APP3 corriendo en el puerto 3000');
});
```
### Código básico de APP3
Este es el contenido de app.js que usé para iniciar la app:

```
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Bienvenido a APP3 - Servidor de Aplicaciones 3');
});

app.listen(3000, () => {
  console.log('APP3 corriendo en el puerto 3000');
});

const express = require('express');
const app = express();
app.use(express.json());

let items = [];
let idCounter = 1;

app.post('/items', (req, res) => {
  const newItem = { id: idCounter++, name: req.body.name || 'Sin nombre' };
  items.push(newItem);
  res.status(201).json(newItem);
});

app.get('/items', (req, res) => {
  res.json(items);
});

app.get('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ message: 'Ítem no encontrado' });
  res.json(item);
});

app.put('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ message: 'Ítem no encontrado' });
  item.name = req.body.name || item.name;
  res.json(item);
});

app.delete('/items/:id', (req, res) => {
  const index = items.findIndex(i => i.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Ítem no encontrado' });
  const deleted = items.splice(index, 1);
  res.json(deleted[0]);
});

app.get('/', (req, res) => {
  res.send('Bienvenido a APP3 con funcionalidad CRUD');
});

app.listen(3000, () => {
  console.log('APP3 corriendo en el puerto 3000');
});

```
### Inicializar el proyecto y dependencias
```
npm init -y
npm install express
```

