# APP1 – Servidor de Aplicación 1

Este servidor forma parte de la arquitectura escalable del proyecto **Examen de Invierno**. Aloja una aplicación web en Node.js con un CRUD básico y responde al balanceador configurado en `10.0.0.10`.

---

## ⚙️ Configuración inicial

### IP asignada a esta VM: `10.0.0.11`  
Puerto de escucha: `3001`

---

## Instalación de Node.js y dependencias

```bash
sudo apt update
sudo apt install curl -y
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
```
### Verifica la instalación:
node -v
npm -v
Estructura de archivos de la app
Se creó un proyecto básico en Node.js con las siguientes carpetas:

app1/

├── index.js

├── package.json

└── routes/

    └── crud.js
### Inicialización del proyecto
```
npm init -y

npm install express mysql2
```
