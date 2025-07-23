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
