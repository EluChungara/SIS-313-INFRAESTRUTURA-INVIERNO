 **Base de datos MariaDB:** 10.0.1.14

##  Detalles del Servidor de Base de Datos

* **Motor de base de datos:** MariaDB
* **IP del servidor:** `10.0.1.14`
* **Tipo de RAID implementado:** RAID 10
* **Número de discos simulados:** 4 (2 para espejo y 2 para distribución)

---

## Instalación y Configuración de MariaDB

### Instalación:

```bash
sudo apt update
sudo apt install mariadb-server -y
```

### Verificación del servicio:

```bash
sudo systemctl status mariadb
```

### Configuración de seguridad:

```bash
sudo mysql_secure_installation
```

---

##  Estructura de la Base de Datos

### Script de creación (`init.sql`):

Ubicado en la carpeta `bd/init/`

```sql
CREATE DATABASE sis313_db;
USE sis313_db;

CREATE TABLE items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);
```

Este script básico es funcional para pruebas iniciales del CRUD desarrollado en la App3. En versiones futuras, se ampliará la estructura con más tablas y relaciones.

---

##  Implementación de RAID 10

Para asegurar la alta disponibilidad y redundancia de los datos críticos, se configuró un RAID 10 en el servidor de base de datos. Este nivel de RAID combina las ventajas del RAID 1 (espejo) y RAID 0 (distribución).

### Archivos relevantes:

* Carpeta: `bd/raid/`
* Archivo: `config-raid10.md`

# Crear RAID 10
sudo mdadm --create --verbose /dev/md0 --level=10 --raid-devices=4 \
  /dev/loop10 /dev/loop11 /dev/loop12 /dev/loop13

# Crear sistema de archivos en el RAID
sudo mkfs.ext4 /dev/md0

# Montar el volumen RAID
sudo mount /dev/md0 /mnt/raid10
```

---

© Universidad San Francisco Xavier de Chuquisaca - 2025


