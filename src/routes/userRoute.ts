import express from 'express'
import {login,createUser,getAllUser} from '../controllers/utilisateurController'


const userRoute=express.Router();


userRoute.route("/utilisateurs").post(createUser).get(getAllUser)
userRoute.route("/login").post(login);

export {userRoute}