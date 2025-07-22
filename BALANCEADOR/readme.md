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

