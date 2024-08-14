# Patitas

**Status**: em desenvolvimento 

![Badge](https://img.shields.io/badge/React%20Native-20232A?style=for-the-badge&logo=react&logoColor=white)
![Badge](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Badge](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Badge](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![Badge](https://img.shields.io/badge/Expo-FFFFFF?style=for-the-badge&logo=expo&logoColor=000020)
![Badge](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
 
## Tabela de Conteúdo

 1. [Tecnologias utilizadas](#tecnologias-utilizadas)
 2. [Download](#download)
 3. [Instalação](#instalação)
 4. [Configuração](#configuração)
 5. [Uso](#uso)
 6. [Arquitetura](#arquitetura)
 7. [Autores](#autores)

<br>

## Tecnologias utilizadas

Essas são as frameworks e ferramentas que você precisará instalar para desenvolver esse projeto:

 - React Native
 - Prisma
 - Expo
 - Node.js


## Download 

Para que seja possível a execução dos arquivos deste repositório, o usuário deve clonar através da ferramenta git. Abrindo o terminal do seu sistema operacional ou o GitBash, insira o seguinte comando na pasta desejada:

``` bash
$ git clone https://github.com/EJCM-SQUAD-3/Patitas.git
```


## Instalação 
Para o correto funcionamento do aplicativo, terão que ser feitas as instalações das dependências, tanto da pasta backend, quanto da pasta frontend. Para isso entre na pasta que foi clonada pelo comando e exclua a pasta .git:

``` bash
$ cd patitas
$ rm -r .git
```

### Pasta backend
Abra o seu terminal e execute o comando para instalar as dependências da pasta backend.

``` bash
$ cd backend
$ npm install -g lemon-pie-cli
```

### Pasta frontend
Agora, execute os comandos abaixo para instalar as dependências da pasta front.

``` bash
$ cd ..
$ cd frontend
$ npm install -g expo-cli
```


## Configuração
Após a instalação, algumas preparações anteriores devem ser realizadas na pasta `backend`.

A partir dos comandos abaixo, será feita a configuração da pasta `backend`:

``` bash
$ cd ..
$ cd backend
$ npx prisma migrate dev --name init
```


## Uso
Ainda na pasta `backend`, execute o seguinte comando para servir o aplicativo em um servidor customizado para posterior execução no front-end:

``` bash
npm run dev ou npm start
```

Com as configurações feitas, mude a seguir para a pasta `frontend`, para a execução do aplicativo utilizando os seguintes comandos:

``` bash
cd ..
cd frontend
npm start
```

## Arquitetura
- [Figma](https://www.figma.com/design/us05aUemXDfhue7Yoxio5c/Patitas---Alta-Fidelidade?t=S897FNvAHjf4G497-1)
- [Modelagem]()

## Autores
* Gerente: Lorenna Cunha
* Tech-lead: Gustavo Breda
* Back-end: Francisco Florencio
* Back-end: Gabriela Vilar
* Back-end: Izabel Alcantra
* Front-end: Natasha Alves
* Front-end: Alex Lana
* Front-end: Eduardo Lima

<br>

## Última atualização: 06/08/2024
