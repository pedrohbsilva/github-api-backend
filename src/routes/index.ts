import { Router } from 'express';
import Users from '../controllers/users';
import Session from '../controllers/session'
const routes = Router();

routes.get('/', (request, response)=> {
  return response.status(200).json({message: 'O servidor está funcionando'})
});

routes.get('/api/login/:code', Session.login);
routes.get('/api/users', Users.getAllUsers)
routes.get('/api/users/:username/details', Users.details)
routes.get('/api/users/:username/repos', Users.repos)


export { routes }