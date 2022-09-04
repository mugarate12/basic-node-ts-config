import { Router } from 'express';

export default function routes(routes: Router) {
  routes.get('/', (req, res) => {
    return res.status(200).json({ messsage: 'API está funcionando!' });
  });
}