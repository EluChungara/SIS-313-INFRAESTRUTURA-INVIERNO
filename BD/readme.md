 **Base de datos MariaDB:** 10.0.1.14
---

## Configuración del Servidor de Base de Datos

### Instalación de MariaDB

En la máquina virtual correspondiente (IP: `10.0.1.14`), instalé MariaDB con los siguientes comandos:

```bash
sudo apt update
sudo apt install mariadb-server -y
```
### Verificación del estado del servicio
```
sudo systemctl status mariadb
```
### Configuración de Seguridad
Ejecuté el script de seguridad incluido:
```
sudo mysql_secure_installation
```
### Creación de la Base de Datos
```
sudo mysql -u root -p
```
Y ejecuté el siguiente script:

```
CREATE DATABASE sis313_db;
USE sis313_db;

CREATE TABLE items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);
```
