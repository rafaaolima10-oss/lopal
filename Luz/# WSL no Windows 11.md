# WSL no Windows 11 

Documentação passo a passo para instalação e habilitação do WSL (Windows Subsystem for Linux)

## Pre-flight check

1. Verifique se a virtualização está habilitada no BIOS/UEFI:

- Abrir o gerenciador de tarefas e verificar a informação "Virtualização" na aba "Desempenho"

2. Verifique se WSL esta instalado. Logo após digitamos o código " dism /online  /enable-feature  /featurename:Microsoft-Windows-Subsystem-Linux  /all  /norestart " para habilitar o WSL 


3. Logo após isso usamos o VirtualMachinePlatform para "ativar" a feature (Funções extra do Windows)

4. Usamos o código " shudown -r -t 0 " para reiniciar o computador

 Depois da atualização usamos esse código "  wsl --list --online " para ver uma lista de distribuições 

5. Usamos o código "  uname -a " para mostrar a ultima versão do kernel

  Se digitar " cd " ele vai para a pasta pessoal, e para confirmar digite " pwd "

  Para mostrar os arquivos com detalhamento digite " ls -lh "

