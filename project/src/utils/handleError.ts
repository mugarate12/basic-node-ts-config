import { Response }  from 'express'

export class AppError extends Error {
  public name: string;
  public httpCode: number;
  public isOperational: boolean;

  constructor(name: string, httpCode: number, description: string, isOperational: boolean) {
    super(description)

    Object.setPrototypeOf(this, new.target.prototype)

    this.name = name
    this.httpCode = httpCode
    this.isOperational = isOperational

    Error.captureStackTrace(this)
  }
}

export function errorHandler(error: AppError, res: Response) {
  return res.status(error.httpCode | 400).json({
    error: {
      name: error.name,
      message: error.message
    }
  })
}