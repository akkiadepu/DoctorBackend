// total to create a API in backend json

const jsonServer=require('json-server');
// importing json-server library
const server=jsonServer.create();
// this 'db.json' file loo backend values Api 
const router=jsonServer.router('db.json');
const middlewares=jsonServer.defaults();
const port=process.env.PORT || 5000;
// to chose port from here like 8080,3001
 
server.use(middlewares);
server.use(router);

server.listen(port);