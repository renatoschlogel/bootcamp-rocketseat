# Backend Go Barber;

## Configurando a estrutura:
  1. criando projeto               : yarn init;
  2. adicionando o express         : yarn add express;
  3. criar pasa src;
  4. Criar arquivos app.js, routes.js e server.js;  

  - Faz o carregamento automatico das alteracoes feitas;

## Nodemon e Sucrase:
  1. adicionando a dependencias    : yarn add sucrase nodemon -D;
  - Sucrase é utilizado para usar a nova syntaxe (import);
    * requirq -> import
    * module.export -> export default
  - Nodemon faz o carregamento automatico das alteracoes feitas;
  - scripts: 
  ```
   "scripts": {
    "dev": "nodemon src/server.js",
    "dev:debug": "nodemon --inspect src/server.js"
  },
  ```
  - Criar arquivo nodemon.json na raiz e colocar o seguinte conteudo:
  ```
  {
  "execMap": {
    "js": "node -r sucrase/register"
  }
}
  ```
  - no arquivo lauch.json do debug alterar:
  ```
   "request": "attach",
    "protocol": "inspector"
  ```
  

  