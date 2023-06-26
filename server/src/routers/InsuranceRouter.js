import express, { Router } from 'express'
import { PostUser, getUser } from '../controllers/InsuranceController.js'
import { validateCreateInsurance } from '../middleware/validate.js'

const UserRouter = express.Router()

UserRouter.post("/post-insurence",validateCreateInsurance, PostUser)
UserRouter.get("/get-insurence", getUser)

export default UserRouter