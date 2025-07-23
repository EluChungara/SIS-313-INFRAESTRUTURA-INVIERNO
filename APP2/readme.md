# SIS313: Examen de Invierno - Configuración de APP2

## Introducción

Este documento detalla cómo configuré el servidor de aplicaciones 2 (**APP2**) como parte del examen de invierno para la materia **SIS313**. Estoy trabajando dentro de una infraestructura web escalable y tolerante a fallos, la cual incluye:

- Un balanceador de carga (Nginx)
- Tres servidores de aplicaciones (**APP1**, **APP2**, **APP3**) desarrollados en Node.js con funcionalidad CRUD
- Un servidor de base de datos (**MariaDB** con RAID 10)

Este README se enfoca exclusivamente en la configuración de **APP2**, que representa el 50% del avance junto con el balanceador y APP1.

---

## Instalación de Dependencias

**Sistema Operativo:** Ubuntu Server 24.04 LTS

### Instalación de Node.js

En la máquina virtual de **APP2** (IP: `10.0.1.12`), ejecuté los siguientes comandos:

```bash
sudo apt update
sudo apt install nodejs npm -y
```
### Verificación de la instalación se hizo con :
```node -v
npm -v
```
## Configuración de la Aplicación
### Creación del Proyecto
 Primero, creé el directorio y el archivo principal:
```
 mkdir -p /var/www/app2
cd /var/www/app2
nano app.js
```
### Luego se ejecutó el siguiente código en app.js:
```
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
```
## Después inicialicé el proyecto y agregué las dependencias:
```
npm init -y
npm install express
```
## Ejecución de la Aplicación
Inicié la aplicación con:
```
node app.js
```
