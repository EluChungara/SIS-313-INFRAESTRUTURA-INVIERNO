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

### Resumen del procedimiento (ver archivo para detalle):

```bash
# Crear imágenes para 4 discos virtuales
sudo fallocate -l 1G /raid-disk1.img
sudo fallocate -l 1G /raid-disk2.img
sudo fallocate -l 1G /raid-disk3.img
sudo fallocate -l 1G /raid-disk4.img

# Asociar imágenes a dispositivos de loop
sudo losetup /dev/loop10 /raid-disk1.img
sudo losetup /dev/loop11 /raid-disk2.img
sudo losetup /dev/loop12 /raid-disk3.img
sudo losetup /dev/loop13 /raid-disk4.img

# Crear RAID 10
sudo mdadm --create --verbose /dev/md0 --level=10 --raid-devices=4 \
  /dev/loop10 /dev/loop11 /dev/loop12 /dev/loop13

# Crear sistema de archivos en el RAID
sudo mkfs.ext4 /dev/md0

# Montar el volumen RAID
sudo mount /dev/md0 /mnt/raid10
```

El archivo `config-raid10.md` contiene el procedimiento completo y verificado en el entorno de prueba de nuestra red con IPs del rango `10.0.0.x`.

---


## Consideraciones finales

* El RAID 10 fue configurado específicamente para la base de datos debido a la necesidad de garantizar tolerancia a fallos y velocidad de acceso.
* Toda esta configuración se realizó sobre una IP dentro del segmento privado `10.0.0.x`, respetando la arquitectura definida en el proyecto.
* Este entorno replica una infraestructura web escalable mínima viable, adecuada para entornos académicos y demostraciones prácticas.

---

© Universidad San Francisco Xavier de Chuquisaca - 2025


