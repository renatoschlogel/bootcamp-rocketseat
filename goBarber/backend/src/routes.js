const {Router} = require('express');

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({msg: 'Agora vai'});
});

module.exports = routes;