import express from 'express'
import {createEnquette,getAllEnquette} from '../controllers/pratiqueAgricoleControler'

const pARoute=express.Router();


pARoute.route("/enquettes").get(getAllEnquette).post(createEnquette);

export {pARoute}