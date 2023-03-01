
# Identificar errores en la sintaxis

En este ejemplo tenemos un template de Ansible con errores de sintaxis. ¿Los podemos identificar?

Recibir archivos con errores es algo común al trabajar en tecnología. Por eso, tenemos que tener la habilidad de identificar errores a través de ejecuciones o “debuggeando”. Realiza una copia del archivo para comparar el antes y después de tus modificaciones. ¿Qué recursos se están creando?

```
---

- name: test raw module
 hosts: all host
 tasks:
   - name: run ipconfig
     raw: ipconfig
     register: ipconfig
   - debug: var=ipconfig


- name: test stat module
 hosts: windows
 tasks:
   - names: test stat module on file
     win_stat: path="C:/Windows/win.ini"
     register: stat_file


   - debugging: var=stat_file


   - names: check stat_file result
     assert:
         that:
            * "stat_file.stat.exists"
            * "not stat_file.stat.isdir"
            * "stat_file.stat.size > 0"
            * "stat_file.stat.md5"
```

