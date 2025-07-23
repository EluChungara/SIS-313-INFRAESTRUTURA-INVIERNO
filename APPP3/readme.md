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
```
### Inicializar el proyecto y dependencias
```
npm init -y
npm install express
```

