# SIS313: Examen de Invierno - Configuración de APP3

## Introducción

Este repositorio corresponde a la configuración del servidor de aplicaciones 3 (**APP3**) como parte del proyecto de infraestructura web escalable y tolerante a fallos para la materia **SIS313 - Examen de Invierno**. Esta fase representa el 50% de avance para APP3, similar al progreso hecho en APP1 y APP2.

La infraestructura general incluye:

- Un balanceador de carga (Nginx)
- Tres servidores de aplicaciones (**APP1**, **APP2**, **APP3**) con Node.js
- Un servidor de base de datos (**MariaDB** con RAID 10)

Este repositorio documenta la instalación básica y ejecución de APP3, con una respuesta simple en la raíz como parte del desarrollo incremental hacia una aplicación CRUD completa.

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

