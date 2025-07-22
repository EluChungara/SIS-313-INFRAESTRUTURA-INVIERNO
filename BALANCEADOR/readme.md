# BALANCEADOR


El balanceador en tu proyecto tiene como objetivo repartir las solicitudes de los usuarios entre las dos aplicaciones que tienes desplegadas en diferentes servidores, mejorando así la **disponibilidad**, **escalabilidad** y **rendimiento** del sistema.

Actúa como un **punto de entrada único**, de modo que los usuarios no necesitan conocer las direcciones específicas de cada backend. Además, si una instancia falla, la otra puede seguir atendiendo las peticiones, asegurando la **continuidad del servicio**.

---

##  Pasos realizados

1. Instalación de Nginx.
2. Configuración del algoritmo de balanceo Round Robin.
3. Definición de los servidores backend en el archivo de configuración (`nginx.conf`).
4. Verificación de conectividad con los servidores de aplicaciones.
5. Prueba de funcionamiento desde navegador y `curl`.

### configuracion del balanceador
ip: 10.0.0.10
> Dirección IP de esta máquina: `10.0.0.10`  
> Gateway: `10.0.0.1`  
> DNS: `8.8.8.8`, `8.8.4.4`
### Para editar el archivo :

``bash
sudo nano /etc/netplan/50-cloud-init.yaml
### instalar Nginx

network:
  version: 2
  ethernets:
    enp0s3:
      dhcp4: false
      addresses: [10.0.0.10/24]
      routes:
        - to: default
          via: 10.0.0.1
      nameservers:
        addresses: [8.8.8.8, 8.8.4.4]
### ejecutamos el sgt comando para aplicar los cambios
sudo netplan apply
### instalación de Nginx
sudo apt update
sudo apt install nginx -y
Verificamos el estado con : 
sudo systemctl status nginx
## Configuración del archivo de balanceador

Para configurar el servicio de balanceo de carga, se creó un archivo específico para el sitio dentro del directorio de Nginx en `/etc/nginx/sites-available`. En él se definieron las IPs de los servidores backend, el puerto de escucha y el nombre de dominio local.

###  Archivo creado:

``bash
sudo nano /etc/nginx/sites-available/balanceo_SIS313

upstream mis_apps {
    server 10.0.0.11:3001;
    server 10.0.0.12:3002;
    server 10.0.0.13:3003;
}

server {
    listen 80;
    server_name sis313.invierno;

    location / {
        proxy_pass http://mis_apps;
        proxy_http_version 1.1;

        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        proxy_cache_bypass $http_upgrade;
        proxy_redirect off;
    }
}

### Activación del sitio en Nginx
sudo ln -s /etc/nginx/sites-available/balanceo_SIS313 /etc/nginx/sites-enabled/
Activación del sitio en Nginx
Una vez creado el archivo de configuración, se habilitó el sitio mediante un enlace simbólico al directorio sites-enabled, y se eliminó la configuración por defecto para evitar conflictos.

Crear enlace simbólico:
sudo ln -s /etc/nginx/sites-available/balanceo_SIS313 /etc/nginx/sites-enabled/
Eliminar sitio por defecto: 
sudo rm /etc/nginx/sites-enabled/default
 Verificación de sintaxis de Nginx:
sudo nginx -t
Si la salida indica que la sintaxis es correcta, se procede al reinicio del servicio.
Reiniciar el servicio:
sudo systemctl restart nginx
### Verificación de conectividad y funcionamiento
Para validar que el balanceador esté funcionando correctamente, se realizaron pruebas de conectividad hacia cada servidor backend desde el balanceador.
curl http://10.0.0.11:3001/
curl http://10.0.0.12:3002/
curl http://10.0.0.13:3003/
También se añadió una entrada en el archivo /etc/hosts para poder acceder por nombre de dominio desde un navegador web en el cliente:

10.0.0.10 sis313.invierno
