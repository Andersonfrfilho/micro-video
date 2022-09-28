# iniciar a aplicação:

- docker-compose up -d
- docker exec -it micro-videos-typescript-app bash
- npm init -y

# criar repositorio:

- gh repo create andersonfrfilho/nomeDoProjeto

## criar o remote container (executar seu projeto no vscode direto container)

1 - instalar Remote Development - ms-vscode-remote.vscode-remote-extensionpack
2 - abra a pasta pelo o container
3 - selecione a pasta (depois selecione a pasta dentro do container)
4 - selecione a pre-definicao docker-compose
OBS - caso surja algum problema de internet utilize o comando:
  - docker network prune
5 - Alterar nome do container no arquivo: ./.devcontainer/devcontainer.json
  - "name":{Nome do projeto}
6 - Editar o volume utilizado para aplicação no arquivo: ./.devcontainer/docker-compose.yml e no arquivo ./.devcontainer/devcontainer.json
  - ./.devcontainer/docker-compose.yml
  - ```
      volumes:
      # Update this to wherever you want VS Code to mount the folder of your project
      - .:/home/node/app:cached
    ```
  - ./.devcontainer/devcontainer.json
    ```
    	"workspaceFolder": "/home/node/app",
    ```
7 - de um remote container