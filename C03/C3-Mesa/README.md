
# Instalación del ambiente de trabajo

## Objetivo
Crear una máquina virtual, instalar Ansible y Terraform.

## Instrucciones
Podemos utilizar cualquier máquina virtual basada en Ubuntu o Debian, solo debemos respetar que su configuración de red esté en modo “Bridge”. En caso de iniciar la misma a través de Vagrant, la configuración inicial:

```
# -*- mode: ruby -*-
# vi: set ft=ruby :
# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|
config.vm.define "server" do |server|
config.vm.box = "ubuntu/focal64"
config.vm.boot_timeout = 900
config.vm.synced_folder ".", "/vagrant", disabled: true
server.vm.provider "virtualbox" do |vb|
# Display the VirtualBox GUI when booting the machine
vb.gui = false
# Customize the amount of memory and cpus on the VM:
vb.memory = 2048
vb.cpus = 2
end
server.vm.hostname = "server"
server.vm.network "public_network"
server.vm.provision "shell", inline: <<-SHELL
sudo apt-get update
sudo apt-get install -y python3
sudo apt-get install -y unzip
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
sudo apt install software-properties-common -y
sudo add-apt-repository --yes --update ppa:ansible/ansible
sudo apt install ansible -y
sudo apt-get install python3-pip -y
pip3 install boto3
pip3 install boto
curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -
sudo apt-add-repository "deb [arch=$(dpkg --print-architecture)] https://apt.releases.hashicorp.com/ $(lsb_release -cs) main"
sudo apt install terraform
sudo apt install net-tools
SHELL
end
end
```

Para poder instalar Ansible, que va a ser nuestra primera herramienta, tenemos que tener instalado:
- Python
- PIP
- Boto3
- AWS CLI

Con la instalación de Python, tenemos la posibilidad de usar Pip, que es un repositorio de módulos de este lenguaje para utilizar libremente. Durante esta materia, vamos a crear código para automatizar tareas en AWS. Para que funcione correctamente, tenemos que instalar un módulo de Python que se llama “boto3”, luego de instalar Pip:

```
sudo apt install pip && pip install boto3
```

Ahora sí, finalmente vamos a instalar Ansible, ya que cumplimos con todos los prerequisitos:
```
sudo apt install ansible
```

Para verificar que todo funciona correctamente, lo hacemos de la siguiente forma:
```
ansible --version
```

La última herramienta para instalar es AWS CLI, la misma es necesaria para ejecutar comandos remotamente desde nuestras computadoras hacía la cuenta de AWS que estemos utilizando. Para instalar esta herramienta, debemos ejecutar el comando:

```
sudo apt install awscli
```

Con el objetivo de probar que esté instalado correctamente, ejecutamos:
```
aws –version
```
