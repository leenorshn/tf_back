import {PrismaClient} from '@prisma/client';
import { Request, Response } from 'express';


const db=new PrismaClient();

const getAllAdress=async (req:Request,res:Response)=>{
    try {
        const addresses=await db.adresse.findMany({});
        res.status(200).json(addresses);
    } catch (error) {
        res.status(500).json({error});
    }
}

export {getAllAdress}