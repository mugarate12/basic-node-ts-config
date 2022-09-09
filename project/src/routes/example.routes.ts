import { Router } from 'express';
import { Joi, Segments, celebrate } from 'celebrate';

import { exampleController } from '../controllers';

export default function routes(routes: Router) {
  routes.get('/', celebrate({
    [Segments.QUERY]: Joi.object().keys({
      name: Joi.string().optional(),
    }),
  }), exampleController.example);
}