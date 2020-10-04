import express from 'express'
import {createChamp,getAllChamps} from '../controllers/champController'

const champRoute=express.Router();


champRoute.route("/champs").post(createChamp).get(getAllChamps)


export {champRoute}