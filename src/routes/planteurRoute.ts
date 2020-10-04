import express from 'express'
import {createPlanteur,getPlanteur} from '../controllers/planteurController'

const planteurRoute=express.Router();

planteurRoute.route("/planteurs").post(createPlanteur).get(getPlanteur);


export {planteurRoute}