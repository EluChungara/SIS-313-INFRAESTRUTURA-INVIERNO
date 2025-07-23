# SIS313 - Examen de Invierno: Infraestructura Web Escalable y Tolerante a Fallos
**Nombre:** Elizabeth Chungara Choque
**Materia:** SIS313 - Infraestructura Plataformas Tecnologicas y Redes
**Docente:** Ingeniero Marcelo Quispe
**Fecha:** 23 Julio 2025

# Proyecto de Examen de Invierno- Infraestructura Web Escalable

## Universidad San Francisco Xavier de Chuquisaca

### Carrera de Ingeniería de Sistemas - Materia: SIS313

Este repositorio documenta el desarrollo del proyecto final de la materia SIS313, cuyo objetivo es implementar una infraestructura web distribuida y tolerante a fallos, con balanceador de carga, múltiples servidores de aplicación y una base de datos centralizada protegida mediante RAID 10.

##  Detalles del Proyecto

* **Balanceador de carga:** NGINX
* **Aplicaciones:** Servidores Node.js con CRUD
* **Base de datos:** MySQL (una sola instancia) con RAID 10

## Topología de Red

| Servidor | Rol             | IP Estática | Puerto    | Descripción                       |
| -------- | --------------- | ----------- | --------- | --------------------------------- |
| Proxy    | NGINX           | `10.0.0.10` | 80 / 8080 | Balanceador de carga (proxy)      |
| App1     | Node.js CRUD    | `10.0.0.11` | 3000      | Servidor de aplicación #1         |
| App2     | Node.js CRUD    | `10.0.0.12` | 3000      | Servidor de aplicación #2         |
| App3     | Node.js CRUD    | `10.0.0.13` | 3000      | Servidor de aplicación #3         |
| BD       | MySQL + RAID 10 | `10.0.0.14` | 3306      | Base de datos central con RAID 10 |

> Todas las IPs están asignadas bajo el segmento de red `10.0.0.0/24` mediante red bridged.

---

## Arquitectura General

```
                    [ Internet ]
                        |
                        ↓
                [ Proxy NGINX ] 10.0.0.10
             /           |           \
 [App1 - Node.js] [App2 - Node.js] [App3 - Node.js]
   10.0.0.11        10.0.0.12         10.0.0.13
              \       |        /
               \      |       /
                  [ MySQL BD + RAID 10 ]
                         10.0.0.14
```

---


## Base de Datos

### Esquema Principal:

```sql
CREATE TABLE clientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  telefono VARCHAR(20),
  direccion TEXT,
  fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  activo BOOLEAN DEFAULT TRUE
);
```

### Archivos Importantes (carpeta `bd/`):

* `init/init.sql` → script de creación de la tabla `clientes`
* `raid10/config-raid.md` → instrucciones y verificación RAID 10

---

---

## Accesos

* [http://10.0.0.10](http://10.0.0.10)           → Proxy (balanceado)
* [http://10.0.0.10:8080](http://10.0.0.10:8080) → Estado NGINX
* [http://10.0.0.11:3000](http://10.0.0.11:3000) → App1 directa
* [http://10.0.0.12:3000](http://10.0.0.12:3000) → App2 directa
* [http://10.0.0.13:3000](http://10.0.0.13:3000) → App3 directa

---

## Contacto y Licencia

Este proyecto es de uso **estrictamente educativo** como evaluación final de la materia SIS313. 
---

© Universidad San Francisco Xavier de Chuquisaca - 2025

