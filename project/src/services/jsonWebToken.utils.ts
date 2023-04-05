import jwt from 'jsonwebtoken';
import { constants } from './../config';

export default class JsonWebTokenUtils {
  public createToken(payload: object) {
    return jwt.sign(payload, constants.JWT_SECRET, {});
  };
};