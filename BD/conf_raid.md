### Crear el RAID 10 usando mdadm

sudo mdadm --create --verbose /dev/md0 --level=10 --raid-devices=4 \
/dev/loop10 /dev/loop11 /dev/loop12 /dev/loop13

### Crear el sistema de archivos (ext4)
sudo mkfs.ext4 /dev/md0
### Montamos el RAID en una carpeta específica

sudo mkdir /mnt/raid10
sudo mount /dev/md0 /mnt/raid10
### Verificamso que el raid este funcionando 
cat /proc/mdstat
sudo mdadm --detail /dev/md0
