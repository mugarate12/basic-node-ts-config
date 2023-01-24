import { Request, Response } from 'express';

import { exampleService } from './../services';
import { handleError } from './../utils';

export default class ExampleController {
  public example (req: Request, res: Response) {
    const { name } = req.query;

    if (name === 'error') {
      return handleError.errorHandler(
        new handleError.AppError('Error Message', 404, 'User not found', true),
        res
      );
    }
    
    const message = exampleService.formatExampleMessage(String(name));
    
    return res.status(200).json({ message });
  }
}