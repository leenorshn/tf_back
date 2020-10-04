import express from 'express'
import {getAllAdress} from '../controllers/addressController'

const addressRoute=express.Router();

addressRoute.route("/adresses").get(getAllAdress);

export {addressRoute}