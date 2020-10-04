import express from "express"

import {userRoute} from "./routes/userRoute";
import {addressRoute} from "./routes/addressRoute";
import {champRoute} from "./routes/champRoute";
import {pARoute} from "./routes/pAController";
import {planteurRoute} from "./routes/planteurRoute";

const app=express();
const port=process.env.PORT||3030;

app.use(express.json());
///
app.use(userRoute)
app.use(addressRoute)
app.use(champRoute)
app.use(pARoute)
app.use(planteurRoute)

app.listen(port,()=>console.log(`server running on ${port}`));

