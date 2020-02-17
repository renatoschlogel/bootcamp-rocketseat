const express = require('express');

const server = express();
server.use(express.json());

const users = ['Renato', 'Pedro', 'Rafael'];

server.use((req, res, next) => {
  console.time('Request');
  console.log(`Metodo: ${req.method} Url: ${req.url}`);
  next();
  console.timeEnd('Request');
})

function checkUserExists(req, res, next) {
  if(!req.body.name){
    return res.status(400).json({error: 'User name is required!'})
  }

  return next();
}

function checkUserInArray(req, res, next) {
  if(!users[req.params.index]){
    return res.status(400).json({error: 'User does not exists!'})
  }

  return next();
}

server.get('/users', (req, res) => {
  res.json(users)
})

server.get('/users/:index', checkUserInArray, (req, res) => {
  res.json(users[req.params.index])
})

server.post('/users', checkUserExists, (req, res) => {
  const {name} = req.body;
  users.push(name);
  
  return res.json(users);
})

server.put('/users/:index', checkUserExists, checkUserInArray, (req, res) => {

  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;

  res.json(users)
});


server.delete('/users/:index', checkUserInArray, (req, res) => {

  const { index } = req.params;

  users.splice(index, 1);

  res.send();
});

server.listen(3000);

