import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET || 'secret'

export default function createToken(userID: number) {
  return jwt.sign({
    id: userID
  }, JWT_SECRET, {})
}
