# Pacotes utilizados

### PRO

-   [ ] express
-   [ ] mongoose
-   [ ] require-dir
-   [ ] mongoose-paginate
-   [ ] cors

### DEV

-   [ ] eslint
-   [ ] nodemon
-   [ ] babel
-   [ ] webpack

### Commandos do docker

```bash
# Para baixar o mongose
$ docker pull mongo

# Lista os containers existentes
$ sudo docker container ls -a

# Se ja existe o container, apenas da start
$ sudo docker container start mongodb

# Sobe um container se nao existir
$ sudo docker run --name mongodb -p 27017:27017 -d mongo

# OBS: para testar acessa: http://localhost:27017/
# OBS: utileze o ROBO 3T para gerenciar o mongo
```

### Base url para o insominia

```
{
  "base_url": "http://localhost:3001/api"
}
```
